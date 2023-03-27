import { Container } from 'typedi';
import { authController } from './auth.controller';
import { Request, Response, Router } from 'express';
const instanceController = Container.get(authController);

const authRoute = Router();

authRoute.get('/',(req: Request,res: Response) => instanceController.execAction(req,res));

export default authRoute

