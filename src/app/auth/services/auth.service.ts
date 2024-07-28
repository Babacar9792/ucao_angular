import { Injectable } from '@angular/core';
import { DefaultService } from '../../shared/services/default.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DefaultService {


  isAuthenticate() : boolean{
    return localStorage.getItem("token") != null;
  }
  getUser(){
   return localStorage.getItem("user");
  }

  getToken(){
    return localStorage.getItem("token");
  }

}
