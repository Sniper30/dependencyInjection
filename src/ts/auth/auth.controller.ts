import { Request, Response } from "express";
import { Service } from "typedi";
import { AuthSchemaRegister } from "./auth.schema";
import { authService } from "./auth.service";

@Service()
export class authController {
  constructor(private readonly service: authService) {}

  async register(req: Request, res: Response) {
    const { body } = req;

    //validating schema
    const { error } = AuthSchemaRegister.validate(body);
    if (error) return res.end("error =>" + error);
    try {
      await this.service.registerService(body);
      const {password,repeat_password,...newBody} = body
      const token =  this.service.generateToken(newBody)
      //returning token to the client
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error)
    }
    return res.end("error trying to register user")
  }

  async login(req: Request, res: Response) {
    const { body } = req;
    const user = await this.service.logginService(body);
    const token =  this.service.generateToken(user)
    return res.json({ token });
  }
}
