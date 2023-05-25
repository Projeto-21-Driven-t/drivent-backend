import { notFoundError } from '@/errors';
import { badRequestError } from '@/errors/bad-request-error';
import { cannotBookingError } from '@/errors/cannot-booking-error';
import bookingRepository from '@/repositories/booking-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import roomRepository from '@/repositories/room-repository';
import ticketsRepository from '@/repositories/tickets-repository';

async function checkEnrollmentTicket(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) throw cannotBookingError();

  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

  if (!ticket || ticket.status === 'RESERVED' || ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) {
    throw cannotBookingError();
  }
}

async function checkValidBooking(roomId: number) {
  const room = await roomRepository.findById(roomId);
  const bookings = await bookingRepository.findByRoomId(roomId);

  if (!room) throw notFoundError();
  if (room.capacity <= bookings.length) throw cannotBookingError();
}

async function getBooking(userId: number) {
  const booking = await bookingRepository.findByUserId(userId);
  if (!booking) throw notFoundError();

  return booking;
}

async function bookingRoomById(userId: number, roomId: number) {
  if (!roomId) throw badRequestError();
  const userBooking = await bookingRepository.findByUserId(userId);
  await checkEnrollmentTicket(userId);
  await checkValidBooking(roomId);

  return bookingRepository.upsertBooking({ id: userBooking?.id, roomId, userId });
}

async function checkBookingByUserId(userId: number) {
  const data = await bookingRepository.findByUserIdWhithHotel(userId);

  if (!data) throw cannotBookingError();

  return data;
}

const bookingService = {
  bookingRoomById,
  getBooking,
  checkEnrollmentTicket,
  checkValidBooking,
  checkBookingByUserId,
};

export default bookingService;
