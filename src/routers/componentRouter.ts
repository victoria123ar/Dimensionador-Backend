import { Router } from 'express';
import { getNames, specificMassAndViscosity } from '@/controllers/componentController';

const componentRouter = Router();

componentRouter.get('/names', getNames);
componentRouter.post('/inputs', specificMassAndViscosity)
export { componentRouter };
