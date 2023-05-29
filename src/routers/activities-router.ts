import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { activitiesSchema } from '@/schemas/activities-schemas';
import { deleteSchedule, getActivities, scheduleActivity } from '@/controllers/activities-controller';

const activitiesRouter = Router();

activitiesRouter
  .all('/*', authenticateToken)
  .get('/', getActivities)
  .post('/', validateBody(activitiesSchema), scheduleActivity)
  .delete('/:id', deleteSchedule);

export { activitiesRouter };
