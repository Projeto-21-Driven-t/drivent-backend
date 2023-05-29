import supertest from 'supertest';
import { TicketStatus } from '@prisma/client';
import { cleanDb, generateValidToken } from '../helpers';
import {
  createEvent,
  createEnrollmentWithAddress,
  createUser,
  createTicketTypeWithHotel,
  createTicket,
} from '../factories';
import { createActivity, scheduleActivity } from '../factories/activities-factory';
import app, { init } from '@/app';

beforeAll(async () => {
  await init();
  await cleanDb();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe('POST /activities', () => {
  it('Should respond with status 401 if no token is given', async () => {
    const response = await server.post('/activities');

    expect(response.status).toBe(401);
  });

  describe('When token is valid', () => {
    it('Should respond with status 201 when everything is OK', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const enrollment = await createEnrollmentWithAddress(user);
      const ticketType = await createTicketTypeWithHotel();
      await createTicket(enrollment.id, ticketType.id, TicketStatus.PAID);
      await createEvent();
      const activity = await createActivity();

      const response = await server
        .post('/activities')
        .set('Authorization', `Bearer ${token}`)
        .send({ activityId: activity.id, startsAt: '31/05/23 09:00' });

      expect(response.status).toBe(201);
    });

    it('Should respond with status 409 when date conflict happens in scheduling', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const enrollment = await createEnrollmentWithAddress(user);
      const ticketType = await createTicketTypeWithHotel();
      await createTicket(enrollment.id, ticketType.id, TicketStatus.PAID);
      await createEvent();
      const activity = await createActivity();
      await scheduleActivity(user.id, activity.id, '30/05/23 09:00');

      const response = await server
        .post('/activities')
        .set('Authorization', `Bearer ${token}`)
        .send({ activityId: activity.id, startsAt: '30/05/23 09:00' });

      expect(response.status).toBe(409);
    });
  });
});

describe('DELETE /activities', () => {
  it('Should respond with status 401 if no token is given', async () => {
    const response = await server.delete('/activities');

    expect(response.status).toBe(401);
  });

  describe('When token is valid', () => {
    it('Should respond with status 200 if deleted successfully', async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      await createEvent();
      const activity = await createActivity();
      await scheduleActivity(user.id, activity.id, '31/12/2023 10:00');

      const response = await server.delete(`/activities/${activity.id}`).set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
  });
});
