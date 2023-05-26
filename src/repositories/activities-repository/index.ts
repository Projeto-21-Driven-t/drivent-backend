import { prisma } from '@/config';

function findManyActivities() {
  return prisma.activity.findMany({
    orderBy: [
      {
        startsAt: 'asc',
      },
    ],
  });
}

const activitiesRepository = {
  findManyActivities,
};

export default activitiesRepository;
