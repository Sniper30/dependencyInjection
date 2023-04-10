
import { Container } from 'typedi';
import { authController } from './auth.controller';
import { Request, Response, Router } from 'express';
const instanceController = Container.get(authController);

const authRoute = Router();

authRoute.post('/register',(req: Request,res: Response) => instanceController.register(req,res));
authRoute.post('/login',(req: Request,res: Response) => instanceController.login(req,res));

export default authRoute

