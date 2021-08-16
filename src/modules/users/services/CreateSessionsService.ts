import AppError from '@shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class CreateSessionsService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UserRepository);

    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Incorrect email/password.', 401);
    }

    const passwordConfirmed = await compare(password, user.password);
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password.', 401);
    }

    const token = sign({}, '7533fb56776e022a77500ae98e55cc94', {
      subject: user.id,
      expiresIn: '1d'
    })

    return {
      user,
      token
    };
  }
}

export default CreateSessionsService;
