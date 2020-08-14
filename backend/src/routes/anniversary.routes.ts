import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import BirthdayController from '../controller/BirthdayController';

const anniversaryRouter = Router();
const birthdayController = new BirthdayController();

anniversaryRouter.use(ensureAuthenticated);

anniversaryRouter.post('/', birthdayController.create);
anniversaryRouter.get('/', birthdayController.index);
anniversaryRouter.patch('/:id_birthday', birthdayController.update);
anniversaryRouter.delete('/:id_birthday', birthdayController.delete);

export default anniversaryRouter;