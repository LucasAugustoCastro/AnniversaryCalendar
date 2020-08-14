import {Router} from 'express';
import userRouter from './user.routes';
import sessionRouter from './session.routes';
import anniversaryRouter from './anniversary.routes';
// import anniversaryRouter from './anniversary.routes';


const route = Router();

route.use('/user', userRouter);
route.use('/session', sessionRouter);
route.use('/birthday', anniversaryRouter);

export default route;