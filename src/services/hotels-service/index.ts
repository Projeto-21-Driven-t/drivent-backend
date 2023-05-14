import hotelRepository from '@/repositories/hotel-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { notFoundError } from '@/errors';
import ticketsRepository from '@/repositories/tickets-repository';
import { cannotListHotelsError } from '@/errors/cannot-list-hotels-error';
import { cannotFindEnrollmenteError } from '@/errors/cannot-find-enrollment-error';
import { notPaidYetError } from '@/errors/not-paid-yet-error';
import { notHotelIncludesError } from '@/errors/not-Hotel-includes-error';

async function listHotels(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw cannotFindEnrollmenteError();
  }
  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

  if (!ticket || ticket.status === 'RESERVED') {
    throw notPaidYetError();
  }
  if (ticket.TicketType.isRemote || !ticket.TicketType.includesHotel) {
    throw notHotelIncludesError();
  }
}

async function getHotels(userId: number) {
  await listHotels(userId);

  const hotels = await hotelRepository.findHotels();
  if (!hotels || hotels.length === 0) {
    throw notFoundError();
  }
  return hotels;
}

async function getHotelsWithRooms(userId: number, hotelId: number) {
  await listHotels(userId);

  const hotel = await hotelRepository.findRoomsByHotelId(hotelId);

  if (!hotel || hotel.Rooms.length === 0) {
    throw notFoundError();
  }
  return hotel;
}

export default {
  getHotels,
  getHotelsWithRooms,
  listHotels,
};
