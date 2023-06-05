import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import userService from '@/services/userService';

export async function register(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body;

  try {
    const user = await userService.createUser({ name , email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
}