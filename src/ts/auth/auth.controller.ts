import { Request, Response } from 'express';
import { Service } from 'typedi';
import { authService } from './auth.service';
@Service()
export class authController {
  constructor (private readonly service: authService) {}

  execAction(req: Request, res: Response){
    console.log(req.method)
    res.end(this.service.printHello())
    
  }
}