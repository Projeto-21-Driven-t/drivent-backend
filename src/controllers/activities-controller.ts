import { Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import activitiesService from '@/services/activities-service';

export async function getActivities(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const activities = await activitiesService.getActivities();
    res.status(httpStatus.OK).send(activities);
  } catch (e) {
    console.log(e);

    next(e);
  }
}
