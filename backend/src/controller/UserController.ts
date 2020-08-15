import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";


export default class UserController {
  public async create(request:Request, response: Response): Promise<Response> {
    try{
      const {name, email, password} = request.body;
  
      const createUser = new CreateUserService();
      const user = await createUser.execute({
        name,
        email,
        password,
      });
  
      delete user.password;
      return response.json(user);
    } catch (err) {
      return response.status(err.statusCode).json({error: err.message});
    }
  }
}