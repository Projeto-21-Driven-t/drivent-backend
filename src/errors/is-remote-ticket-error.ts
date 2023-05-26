import { ApplicationError } from '@/protocols';

export function isRemoteTycketError(): ApplicationError {
  return {
    name: 'isRemoteTycketError',
    message: 'isRemoteTycketError',
  };
}
