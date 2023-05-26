import { ApplicationError } from '@/protocols';

export function isRemoteTicketError(): ApplicationError {
  return {
    name: 'isRemoteTicketError',
    message: 'isRemoteTicketError',
  };
}
