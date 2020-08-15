import { getRepository } from 'typeorm';
import { lastDayOfMonth, getDate } from 'date-fns';
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
    if(Number(month) < 1 || Number(month)>12) {
      throw new AppError('The month is wrong', 400);
    }

    const lastDayOnMonth = lastDayOfMonth(new Date(`${yearBirth}-${month}-${1}`));
    const lastDay = getDate(new Date(lastDayOnMonth));


    if(day< 1 || day > lastDay){
      throw new AppError('The day is wrong', 400);
    }

    const birthday_date = `${yearBirth}-${month}-${day}`;


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