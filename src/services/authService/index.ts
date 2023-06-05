import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { invalidCredentialsError } from './errors';
import { exclude } from '@/utils/prisma';
import userRepository from '@/repositories/userRepository';
import sessionRepository from '@/repositories/sessionRepository';

async function login(params: LoginParams): Promise<LoginResult> {
  const { email, password } = params;

  const user = await getUser(email);

  await validatePassword(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, 'password'),
    token,
  };
}

async function getUser(email: string): Promise<GetUserResult> {
  const user = await userRepository.findByEmail(email, { id: true, name: true, email: true, password: true });
  if (!user) throw invalidCredentialsError();

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.createSession({
    token,
    userId,
  });

  return token;
}

async function validatePassword(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();  
}

export type LoginParams = Pick<User, 'email' | 'password'>;

type LoginResult = {
  user: Pick<User, 'id' | 'email'>;
  token: string;
};

type GetUserResult = Pick<User, 'id' | 'email' | 'password'>;

const authService = {
  login
};

export default authService;
export * from './errors';