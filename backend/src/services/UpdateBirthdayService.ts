import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppErrors';
import Anniversary from '../entities/Anniversary';

interface Request {
  id_birthday: string;
  name: string;
  user_id: string;
  day: number;
  month: number;
  yearBirth: number;
}

class UpdateBirthdayService {
  public async execute({
    id_birthday,
    name,
    user_id,
    day, 
    month, 
    yearBirth,
    
  }: Request): Promise<Anniversary | any> {

    const anniversaryRepository = getRepository(Anniversary);


    const findBirthdayById = await anniversaryRepository.findOne(id_birthday);

    if(!findBirthdayById){
      throw new AppError("Birthday doesn't exist", 404);
    }

    const birthday_date = `${yearBirth}-${month}-${day}`


    const updatebirthday = {
      ...findBirthdayById,
      birthday_person: name,
      user_id,
      birthday_date

    }

    await anniversaryRepository.save(updatebirthday);

    return updatebirthday;

  }
}

export default UpdateBirthdayService;