import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { bookingcheck, bookingRoom, listBooking } from '@/controllers';

const bookingRouter = Router();

bookingRouter.all('/*', authenticateToken).get('', listBooking).get('/check', bookingcheck).post('', bookingRoom);

export { bookingRouter };
