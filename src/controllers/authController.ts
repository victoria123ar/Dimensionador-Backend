import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import authService from '@/services/authService';

export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  try {
    const result = await authService.login({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}