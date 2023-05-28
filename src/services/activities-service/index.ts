import { Activity } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import activitiesRepository from '@/repositories/activities-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { cannotFindEnrollmenteError } from '@/errors/cannot-find-enrollment-error';
import { notPaidYetError } from '@/errors/not-paid-yet-error';
import { notFoundError } from '@/errors';
import { isRemoteTicketError } from '@/errors/is-remote-ticket-error';

dayjs.extend(customParseFormat);

async function getActivities(userId: number): Promise<Activity[]> {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw cannotFindEnrollmenteError();
  }
  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

  if (!ticket || ticket.status === 'RESERVED') {
    throw notPaidYetError();
  }
  console.log(ticket);

  if (ticket.TicketType.isRemote) {
    throw isRemoteTicketError();
  }
  const activities = await activitiesRepository.findManyActivities();
  if (activities.length === 0) throw notFoundError();
  return activities;
}

const activitiesService = { getActivities };

type formatedActivitiesType = {
  principal: Activity[];
  lateral: Activity[];
  workshop: Activity[];
};

export default activitiesService;
