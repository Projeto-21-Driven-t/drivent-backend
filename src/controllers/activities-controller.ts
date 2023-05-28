import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import activitiesService from '@/services/activities-service';

export async function getActivities(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const activities = await activitiesService.getActivities(userId);
    res.status(httpStatus.OK).send(activities);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function scheduleActivity(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const { userId } = req;
    const { activityId } = req.body;
    const { startsAt } = req.body;
    await activitiesService.scheduleActivity(userId, activityId, startsAt);
    return res.sendStatus(httpStatus.CREATED);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

export async function deleteSchedule(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const { userId } = req;
  const activityId = Number(req.params.id);

  try {
    await activitiesService.deleteSchedule(userId, activityId);
    return res.sendStatus(httpStatus.OK);
  } catch (e) {
    next(e);
  }
}
