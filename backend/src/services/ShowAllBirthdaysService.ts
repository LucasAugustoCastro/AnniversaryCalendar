import { getRepository } from 'typeorm';
import AppError from '../errors/AppErrors';
import Anniversary from '../entities/Anniversary';


class CreateUserService {
  public async execute(user_id: string): Promise<Anniversary[]> {
    const anniversaryRepository = getRepository(Anniversary);

    const anniversaries = await anniversaryRepository.find({
      where: { user_id }
    });

    return anniversaries;

  }
}

export default CreateUserService;