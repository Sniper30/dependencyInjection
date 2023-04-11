import { Request, Response, Router } from 'express';
import Container from 'typedi';
import { tokenCheking } from '../auth/auth.token_midleware';
import { DashBoardController } from './dashboard.controller';

const routeDahsboard = Router();
const instanceDashboard = Container.get(DashBoardController)

routeDahsboard.get('/',tokenCheking ,(req:Request,res:Response)=> instanceDashboard.dashboard(req,res))

export default routeDahsboard 