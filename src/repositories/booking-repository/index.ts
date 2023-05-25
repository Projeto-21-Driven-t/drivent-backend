import { Booking } from '@prisma/client';
import { prisma } from '@/config';

type CreateParams = Omit<Booking, 'id' | 'createdAt' | 'updatedAt'>;
type UpdateParams = Omit<Booking, 'createdAt' | 'updatedAt'>;

async function findByRoomId(roomId: number) {
  return prisma.booking.findMany({
    where: {
      roomId,
    },
    include: {
      Room: true,
    },
  });
}

async function findByUserId(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId,
    },
    include: {
      Room: true,
    },
  });
}

async function findByUserIdWhithHotel(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId,
    },
    include: {
      Room: {
        select: {
          id: true,
          name: true,
          capacity: true,
          Hotel: true,
          Booking: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });
}

async function upsertBooking({ id, roomId, userId }: UpdateParams) {
  if (!id) id = 0;
  return prisma.booking.upsert({
    where: {
      id,
    },
    create: {
      roomId,
      userId,
    },
    update: {
      roomId,
    },
    include: {
      Room: {
        select: {
          id: true,
          name: true,
          capacity: true,
          Hotel: true,
          Booking: {
            select: {
              id: true,
            },
          },
        },
      },
    },
  });
}

const bookingRepository = {
  findByRoomId,
  findByUserId,
  upsertBooking,
  findByUserIdWhithHotel,
};

export default bookingRepository;
