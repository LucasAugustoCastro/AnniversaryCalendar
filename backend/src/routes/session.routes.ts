import { Router } from 'express';
import {celebrate, Segments, Joi} from 'celebrate';
import SessionController from '../controller/SessionController';

const sessionRouter = Router();

const sessionController = new SessionController();

sessionRouter.post('/', 
celebrate({
  [Segments.BODY]: {
    email: 
      Joi
        .string()
        .email()
        .required()
        .error(new Error("Please write a valid email")),
    password: 
      Joi
        .string()
        .min(6)
        .required()
        .error(new Error("Password is a required field")),
  },
}), sessionController.create);

export default sessionRouter;