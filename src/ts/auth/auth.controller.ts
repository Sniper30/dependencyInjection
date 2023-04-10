
import { Request, Response } from 'express';
import {Service} from 'typedi';
import { AuthSchemaRegister } from './auth.schema';
import { authService } from './auth.service'; 

@Service()
export class authController {
  constructor (private readonly service: authService) {}

  async register(req: Request,res:Response){
    const { body } = req;

    const {error} = AuthSchemaRegister.validate(body)
    if(error) res.end("error =>" + error);
    
    if(!error) {
      await this.service.registerService(body)
      body.password = "";
      body.passwordHash = "";
      res.status(200).json({token: this.service.generateToken(body)})
    }
  }

  async login(req: Request,res:Response){
    const { body } = req;
    const user = await this.service.logginService(body);
    if(!user) return res.end(null);
    // const {email, picture, age,firstName,lastName,createAt,id } = user
    return res.json({response: user})
  }

}

