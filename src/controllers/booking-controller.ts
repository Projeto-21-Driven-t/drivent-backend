import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

import { AuthenticatedRequest } from '@/middlewares';
import bookingService from '@/services/booking-service';

export async function listBooking(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const booking = await bookingService.getBooking(userId);
    return res.status(httpStatus.OK).send({
      id: booking.id,
      Room: booking.Room,
    });
  } catch (error) {
    next(error);
  }
}

export async function bookingRoom(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const { roomId } = req.body as Record<string, number>;

    const booking = await bookingService.bookingRoomById(userId, roomId);

    return res.status(httpStatus.OK).send(booking);
  } catch (error) {
    next(error);
  }
}

export async function bookingcheck(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;

    const booking = await bookingService.checkBookingByUserId(userId);

    return res.status(httpStatus.OK).send(booking.Room);
  } catch (error) {
    next(error);
  }
}
