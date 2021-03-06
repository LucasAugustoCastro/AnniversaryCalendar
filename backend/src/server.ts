import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppErrors';
import './database';
import { isCelebrate } from 'celebrate';

const app =  express();

app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  // caso seja um erro gerado pela minha aplicaçao entra no if
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  if (isCelebrate(err)) {
    return response.status(400).json({
        status: 'error',
        message: err.message
    });
}

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});


app.listen(3333, () => {
  console.log('Server start on port 3333')
});
