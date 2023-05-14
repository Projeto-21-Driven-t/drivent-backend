import { ApplicationError } from '@/protocols';

export function notHotelIncludesError(): ApplicationError {
  return {
    name: 'notHotelIncludesError',
    message: 'notHotelIncludesError',
  };
}
