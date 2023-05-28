import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

export async function createActivity() {
  return await prisma.activity.create({
    data: {
      place: 'Sala de Workshop',
      name: 'Atividade do Factory',
      startsAt: '03/06/23 09:00',
      endsAt: '03/06/23 11:00',
      capacity: 25,
    },
  });
}

export async function scheduleActivity(userId: number, activityId: number, startsAt: string) {
    return await prisma.schedule.create({
        data: {
        userId,
        activityId,
        startsAt,
        updatedAt: new Date(),
        }
    });
}