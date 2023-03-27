import 'reflect-metadata';
import express from 'express';
import authRoute from './auth/auth.route';
const app = express();

app.use(authRoute);


app.listen(8000,()=>{
    console.log('running...')
})