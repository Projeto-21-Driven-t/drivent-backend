import { Activity } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import activitiesRepository from '@/repositories/activities-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { cannotFindEnrollmenteError } from '@/errors/cannot-find-enrollment-error';
import { notPaidYetError } from '@/errors/not-paid-yet-error';
import { notFoundError } from '@/errors';
import { isRemoteTycketError } from '@/errors/is-remote-ticket-error';

dayjs.extend(customParseFormat);

async function getActivities(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw cannotFindEnrollmenteError();
  }
  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

  if (!ticket || ticket.status === 'RESERVED') {
    throw notPaidYetError();
  }
  if (ticket.TicketType.isRemote) {
    throw isRemoteTycketError();
  }

  const activities = await activitiesRepository.findManyActivies();
  const formatedActivities: formatedActivitiesType = {
    principal: [],
    lateral: [],
    workshop: [],
  };
  for (let activity of activities) {
    console.log(dayjs(activity.date, 'DD/MM').day());
    activity = { ...activity };
    if (activity.place.includes('Principal')) formatedActivities.principal.push(activity);
    if (activity.place.includes('Lateral')) formatedActivities.lateral.push(activity);
    if (activity.place.includes('Workshop')) formatedActivities.workshop.push(activity);
  }
  if (!activities) throw notFoundError();
  return formatedActivities;
}

const activitiesService = { getActivities };

type formatedActivitiesType = {
  principal: Activity[];
  lateral: Activity[];
  workshop: Activity[];
};

export default activitiesService;
