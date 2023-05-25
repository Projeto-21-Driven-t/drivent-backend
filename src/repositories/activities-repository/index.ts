import { prisma } from '@/config';

function findManyActivies() {
  return prisma.activity.findMany({
    orderBy: [
      {
        place: 'asc',
      },
      {
        date: 'asc',
      },
    ],
  });
}

const activitiesRepository = {
  findManyActivies,
};

export default activitiesRepository;
