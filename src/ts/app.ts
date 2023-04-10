import 'reflect-metadata';
import express, { Request, Response } from 'express';
import authRoute from './auth/auth.route';
import dotenv from 'dotenv';

dotenv.config()

const app = express();


app.use(express.json())
app.use('/log',authRoute);

app.use('test',(req: Request, res:Response)=> res.end(req.method))


app.listen(8000,()=>{
    console.log('running...')
})