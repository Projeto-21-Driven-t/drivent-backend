import { ApplicationError } from '@/protocols';

export function notPaidYetError(): ApplicationError {
  return {
    name: 'notPaidYetError',
    message: 'notPaidYetError',
  };
}
