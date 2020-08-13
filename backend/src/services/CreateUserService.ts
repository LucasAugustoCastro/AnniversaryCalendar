import { getRepository } from 'typeorm';
import User from '../entities/User';
import { hash } from 'bcryptjs';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({name, email, password}: Request): Promise<User> {
    console.log('asa')
    const userRepository = getRepository(User);
    console.log('aaasd')

    const checkEmailUserExistis = await userRepository.findOne({
      where: { email }
    });

    if (checkEmailUserExistis) {
      throw new Error('Email addres already used');
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