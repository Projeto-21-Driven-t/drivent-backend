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
  if (ticket.TicketType.isRemote) {
    throw isRemoteTicketError();
  }
  const activities = await activitiesRepository.findManyActivities();
  // const formatedActivities: formatedActivitiesType = {
  //   principal: [],
  //   lateral: [],
  //   workshop: [],
  // };
  // for (let activity of activities) {
  //   console.log(dayjs(activity.date, 'DD/MM').day());
  //   activity = { ...activity };
  //   if (activity.place.includes('Principal')) formatedActivities.principal.push(activity);
  //   if (activity.place.includes('Lateral')) formatedActivities.lateral.push(activity);
  //   if (activity.place.includes('Workshop')) formatedActivities.workshop.push(activity);
  // }
  if (activities.length === 0) throw notFoundError();
  return activities;
}

async function scheduleActivity(userId: number, activityId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    console.log('aqui1')
    throw cannotFindEnrollmenteError();
  }
  const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

  if (!ticket || ticket.status === 'RESERVED') {
    console.log('aqui2')
    throw notPaidYetError();
  }
  if (ticket.TicketType.isRemote) {
    console.log('aqui3')
    throw isRemoteTicketError();
  }
  await activitiesRepository.createSchedule(userId, activityId);
}

async function deleteSchedule(userId: number, activityId: number) {
  const activity = await activitiesRepository.getScheduleByIds(userId, activityId);
  if(!activity) throw notFoundError();

  await activitiesRepository.deleteSchedule(userId, activityId);
}

const activitiesService = { 
  getActivities,
  scheduleActivity,
  deleteSchedule
};

type formatedActivitiesType = {
  principal: Activity[];
  lateral: Activity[];
  workshop: Activity[];
};

export default activitiesService;
