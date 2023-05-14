import { ApplicationError } from '@/protocols';

export function cannotFindEnrollmenteError(): ApplicationError {
  return {
    name: 'cannotFindEnrollmenteError',
    message: 'cannotFindEnrollmenteError',
  };
}
