import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})


export class ApiServicesService {
  
  private API_URL = 'http://localhost:8080/api/v1/demo';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  
   httpOptions = {
    headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'authorization': `bearer ${this.storageService.getAccessToken()}`
  })
  };
  

  getAllUsers(): Observable<any> {
    const url = `${this.API_URL}/users`;
    console.log(this.httpOptions);
    return this.http.get(url, this.httpOptions);
}

addExpert(firstName :string,lastName:string, username:string, cin:number, email:string, phone:number, password:string): Observable<any> {
  return this.http.post(
    this.API_URL + '/addExpert',
    {
      firstName,
      lastName,
      username,
      cin,
      email,
      phone,
      password
    },
    this.httpOptions
      );
}

}
