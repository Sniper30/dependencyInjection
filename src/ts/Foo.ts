import { Service } from 'typedi';
import { Dog } from './interfaces/Dog';

@Service()
export default class Foo{
    private readonly Dog: Dog[]= [{"name":"veto"}];

    pushOne(n: string){
        this.Dog.push({name:n})
    }

    findAll(): Dog[]{
        return this.Dog
    }
}