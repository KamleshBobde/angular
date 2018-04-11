import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable()
export class LoginServiceService {

  constructor() { }

  login(request: Login) {
    if(request!.uName && request!.password) {
      return true;
    } else {
      return false;
    }
  }
}
