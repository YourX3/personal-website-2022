
import { HttpException } from '@nestjs/common';

export class Utils {

  /** 
   * @desc créé et retourne un object contenant la clé error qui contient une HttpException
   * @param message le message à transmettre
   * @param statusCode le code d'erreur
   * @return renvoie un object contenant la clé error qui contient une HttpException
  */
  static createExceptionObj(message : string, statusCode : number) : any {
    return {error: new HttpException(message, statusCode)};
  }
}
