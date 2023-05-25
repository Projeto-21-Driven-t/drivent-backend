import { Activity } from '@prisma/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import activitiesRepository from '@/repositories/activities-repository';
import { notFoundError } from '@/errors';

dayjs.extend(customParseFormat);

async function getActivities() {
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
