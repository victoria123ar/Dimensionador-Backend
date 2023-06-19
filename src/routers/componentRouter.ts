import { Router } from 'express';
import { getNames, calculation } from '@/controllers/componentController';

const componentRouter = Router();

componentRouter.get('/names', getNames);
componentRouter.post('/inputs', calculation)
export { componentRouter };
