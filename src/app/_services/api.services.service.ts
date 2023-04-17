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

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      
      'Authorization': `Bearer ${this.storageService.getAccessToken()}`
    });
  }

  getAllUsers(): Observable<any> {
    const url = `${this.API_URL}/users`;
    const headers = this.getHeaders();
    console.log(headers.getAll('Authorization'));
    return this.http.get<User[]>(url, { headers });

}

}
