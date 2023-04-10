import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class prismaClient extends PrismaClient {
  constructor(){
    super({
      datasources:{
        db:{
          url:"postgresql://pos:123@localhost:5434/typekelvin?schema=public"
        }
      }
    })
  }
}