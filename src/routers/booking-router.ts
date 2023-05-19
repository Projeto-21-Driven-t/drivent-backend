import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { bookingcheck, bookingRoom, changeBooking, listBooking } from '@/controllers';

const bookingRouter = Router();

bookingRouter
  .all('/*', authenticateToken)
  .get('', listBooking)
  .get('/check', bookingcheck)
  .post('', bookingRoom)
  .put('/:bookingId', changeBooking);

export { bookingRouter };
