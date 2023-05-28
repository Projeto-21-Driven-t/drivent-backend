import supertest from 'supertest';
import { cleanDb, generateValidToken } from '../helpers';
import { TicketStatus } from '@prisma/client';
import { 
  createEvent, 
  createEnrollmentWithAddress,
  createUser,
  createTicketTypeWithHotel,
  createTicket} from '../factories';
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
        .send({ activityId: activity.id });

      expect(response.status).toBe(201);
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
      const event = await createEvent();
      const activity = await createActivity();
      const schedule = await scheduleActivity(user.id, activity.id);

      const response = await server.delete(`/activities/${activity.id}`).set('Authorization', `Bearer ${token}`);
      expect(response.status).toBe(200);
    });
  });
});