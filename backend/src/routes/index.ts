import {Router} from 'express';
import userRouter from './user.routes';
// import anniversaryRouter from './anniversary.routes';


const route = Router();

route.use('/signup', userRouter);

export default route;