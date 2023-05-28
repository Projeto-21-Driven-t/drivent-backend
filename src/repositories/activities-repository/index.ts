import { prisma } from '@/config';
import { Prisma } from '@prisma/client';

function findManyActivities() {
  return prisma.activity.findMany({
    orderBy: [
      {
        startsAt: 'asc',
      },
    ],
  });
}

function getScheduleByIds(userId: number, activityId: number){
  return prisma.schedule.findFirst({
    where: {
      userId,
      activityId,
    }
  });
}

function getSchedulesByUserId(userId: number){
  return prisma.schedule.findMany({
    where: {
      userId,
    }
  });
}

async function createSchedule(userId: number, activityId: number, startsAt: string) {
  await prisma.schedule.create({
    data: {
      userId,
      activityId,
      updatedAt: new Date(),
      startsAt,
    } as Prisma.ScheduleUncheckedCreateInput,
  });
  await prisma.activity.update({
    where: {
      id: activityId,
    },
    data: {capacity: {decrement: 1}},
  });
}

async function deleteSchedule(userId: number, activityId: number) {
  await prisma.schedule.deleteMany({
    where: {
      userId,
      activityId,
    },
  });
  await prisma.activity.update({
    where: {
      id: activityId,
    },
    data: {capacity: {increment: 1}},
  });
}

const activitiesRepository = {
  findManyActivities,
  createSchedule, 
  deleteSchedule,
  getScheduleByIds,
  getSchedulesByUserId,
};

export default activitiesRepository;
