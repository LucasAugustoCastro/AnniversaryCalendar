import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '../controller/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.post(
  '/', 
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
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
          .required().error(new Error("Password is a required field")),
      password_confirmation: 
        Joi
          .any()
          .valid(Joi.ref('password'))
          .required()
          .error(new Error("Passwords don't match")),
    },
  }), userController.create);

export default userRouter;

