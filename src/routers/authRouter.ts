import { Router } from 'express';
import { login } from '@/controllers';
import { validateBody } from '@/middlewares';
import { registerSchema } from '@/schemas';

const authRouter = Router();

authRouter.post('/login', validateBody(registerSchema), login);

export { authRouter };