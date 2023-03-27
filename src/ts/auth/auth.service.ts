import { Service } from 'typedi';

@Service()
export class authService {
  
  printHello(){
    return "Hola desde authService";
  }
}