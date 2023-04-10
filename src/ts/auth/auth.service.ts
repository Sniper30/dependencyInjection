import { Service } from "typedi";
import { prismaClient } from "../prisma/prisma.module";
import bcrypt from "bcrypt";
import { userRegister, userLogin } from "./user.interface";
import jwt from "jsonwebtoken";

@Service()
export class authService {
  private errLogin: string = "email o password incorrect";
  constructor(private readonly prisma: prismaClient) {}

  async registerService(body: userRegister) {
    const hash = this.hashPassword(body.password);
    await this.prisma.user
      .create({
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          passwordHash: hash,
          picture: body.picture,
          age: body.age,
        },
      })
      .then(async () => await this.prisma.$disconnect())
      .catch(async (err) => {
        console.log(err);
        await this.prisma.$disconnect();
        process.exit(1);
      });
  }

  async logginService(body: userLogin) {
    const { email } = body;
    const user = await this.prisma.user
      .findUnique({
        where: { email },
      })
      .catch(async (err) => {
        console.log(err);
        await this.prisma.$disconnect();
        process.exit(1);
      });
    await this.prisma.$disconnect();
    if (!user) return { error: this.errLogin };
    if (bcrypt.compareSync(body.password, user.passwordHash)) {
      const { passwordHash, ...newObj } = user;
      return newObj;
    } else return { error: this.errLogin };
  }

  hashPassword(hash: string): string {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(hash, salt);
  }

  generateToken(user: userRegister) {
    const clave: string = process.env.secretClave
      ? process.env.secretClave
      : "";
    return jwt.sign(user, clave, { expiresIn: "10m" });
  }

  validateToken(token: string) {
    const clave: string = process.env.secretClave
      ? process.env.secretClave
      : "";
    return jwt.verify(token, clave);
  }
}
