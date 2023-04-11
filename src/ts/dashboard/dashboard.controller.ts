import { Request, Response } from 'express';
import { Service } from 'typedi';

@Service()
export class DashBoardController{
  dashboard(req:Request,res:Response){
    console.log(req.method);
    res.end('<h1>hola dashboard<h1/>');
  }
}