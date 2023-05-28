import { Activity } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import activitiesRepository from '@/repositories/activities-repository';
import ticketsRepository from '@/repositories/tickets-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { cannotFindEnrollmenteError } from '@/errors/cannot-find-enrollment-error';
import { notPaidYetError } from '@/errors/not-paid-yet-error';
import { conflictError, notFoundError } from '@/errors';
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

async function scheduleActivity(userId: number, activityId: number, startsAt: string) {
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

  const checkDateConflict = await activitiesRepository.getSchedulesByUserId(userId);
  checkDateConflict.map(schedule => {
    if(schedule.startsAt === startsAt){
      throw conflictError('Conflito de horário de atividades');
    }
  });

  await activitiesRepository.createSchedule(userId, activityId, startsAt);
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
