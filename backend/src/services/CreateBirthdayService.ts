import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppErrors';
import Anniversary from '../entities/Anniversary';

interface Request {
  name: string;
  user_id: string;
  day: number;
  month: number;
  yearBirth: number;
}

class CreateBirthdayService {
  public async execute({
    name,
    user_id,
    day, 
    month, 
    yearBirth,
    
  }: Request): Promise<Anniversary> {
    const anniversaryRepository = getRepository(Anniversary);

    const birthday_date = `${yearBirth}-${month}-${day}`

    const birthday = anniversaryRepository.create({
      birthday_person: name,
      birthday_date,
      user_id,
    });

    await anniversaryRepository.save(birthday);

    return birthday;

  }
}

export default CreateBirthdayService;