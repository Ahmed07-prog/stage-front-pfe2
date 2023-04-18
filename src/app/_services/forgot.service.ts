import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const FORGOT_API = 'http://localhost:8080/api/'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForgotService {
  constructor(private http: HttpClient, private storage :StorageService) {}


  forgot(email:string):Observable<any>{
    return this.http.post(FORGOT_API + 'forgot',{
      email
    },
    httpOptions)
  }

  sendReset(password:string):Observable<any>{
    return this.http.post(FORGOT_API + 'reset?token=' + this.storage.getResetToken() ,{
      password,
     
    },
    httpOptions)
  }
}
