import { Router } from 'express';

import { userSchema } from '@/schemas';
import { validateBody } from '@/middlewares';
import { register } from '@/controllers';

const userRouter = Router();

userRouter.post('/', validateBody(userSchema), register);

export { userRouter };