import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { duplicatedEmailError, duplicatedNameError } from './errors';
import userRepository from '@/repositories/userRepository';

export async function createUser({ name, email, password }: CreateUserParams): Promise<User> {
  await validateEmail(email);
  await validateName(name);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.createUser({
    name,
    email,
    password: hashedPassword,
  });
}

async function validateEmail(email: string) {
  const repeatedEmail = await userRepository.findByEmail(email);
  if (repeatedEmail) {
    throw duplicatedEmailError();
  }
}

async function validateName(name: string) {
  const repeatedName = await userRepository.findByName(name);
  if (repeatedName) {
    throw duplicatedNameError();
  }
}

export type CreateUserParams = Pick<User, 'name' | 'email' | 'password'>;

const userService = {
  createUser,
};

export * from './errors';
export default userService;