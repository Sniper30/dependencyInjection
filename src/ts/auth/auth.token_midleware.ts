import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
// import jwt from 'jsonwebtoken';


export async function tokenCheking(req:Request,res:Response,next:NextFunction){
  const authToken = req.headers['authorization'];
  if(!authToken) return  res.sendStatus(401);

  const clave: string = process.env.secretClave
  ? process.env.secretClave
  : "";

  try{
    jwt.verify(authToken,clave)
    return next()
  }catch(err){
    console.log(err)
    return res.sendStatus(401)  
  }
} 