import { Request, Response, request } from 'express';
import CreateBirthdayService from '../services/CreateBirthdayService';
import ShowAllBirthdaysService from '../services/ShowAllBirthdaysService';
import UpdateBirthdayService from '../services/UpdateBirthdayService';
import DeleteBirthdayService from '../services/DeleteBirthdayService';


export default class BirthdayController {
  // metodos em uma controller index, create, update, delete

  public async create(request: Request, response: Response): Promise<Response> {
      const { name, day, month, yearBirth } = request.body;
  
      const user_id = request.user.id;
  
      const createBirthday = new CreateBirthdayService();
  
      const birthdayPerson = await createBirthday.execute({
        name,
        user_id,
        day,
        month,
        yearBirth,
      });
  
      return response.status(200).json(birthdayPerson)
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showAllBirthdays = new ShowAllBirthdaysService();

    const anniversaries = await showAllBirthdays.execute(user_id);

    return response.status(200).json(anniversaries);

  }

  public async update(request: Request, response: Response): Promise<Response> {
    try{
      const { id_birthday } = request.params;
      const { name, day, month, yearBirth } = request.body;
  
      const user_id = request.user.id;
  
      const updateBirthday = new UpdateBirthdayService();
  
      const birthdayPersonUpdated = await updateBirthday.execute({
        id_birthday,
        name,
        user_id,
        day,
        month,
        yearBirth,
      });
  
      return response.status(200).json(birthdayPersonUpdated)
    }catch (err){
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      })
    }
  }

  public async delete(request: Request, response: Response) {
    const { id_birthday } = request.params;

    const deleteBirthday = new DeleteBirthdayService();

    await deleteBirthday.execute(id_birthday);

    return response.status(201).json();
  }
}