import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppErrors';
import User from '../entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({name, email, password}: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkEmailUserExistis = await userRepository.findOne({
      where: { email }
    });

    if (checkEmailUserExistis) {
      throw new AppError('Email addres already used', 400);
    }
    
    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;

  }
}

export default CreateUserService;