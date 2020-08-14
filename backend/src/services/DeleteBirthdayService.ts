import { getRepository } from 'typeorm';
import AppError from '../errors/AppErrors';
import Anniversary from '../entities/Anniversary';


class DeleteBirthdayService {
  public async execute(id_birthday: string) {
    const anniversaryRepository = getRepository(Anniversary);

    const anniversary = await anniversaryRepository.findOne(id_birthday);

    if(!anniversary){
      throw new AppError("Birthday doesn't exist", 404);
    }

    await anniversaryRepository.remove(anniversary);
  }
}

export default DeleteBirthdayService;