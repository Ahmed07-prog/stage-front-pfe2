import { Injectable } from '@angular/core';

const USER_KEY = 'user';
const ACCESS_TOKEn ='access_token';
const RESPONSE = 'all';
const RESET='token';
@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveToken(token: any): void {
    window.sessionStorage.removeItem(ACCESS_TOKEn);
    window.sessionStorage.setItem(ACCESS_TOKEn, JSON.stringify(token));
  }
  public saveResetToken(token : any): void{
    window.sessionStorage.removeItem(RESET);
    window.sessionStorage.setItem(RESET, JSON.stringify(token));
  }

  public getAll(): any {
    
    const all = window.sessionStorage.getItem(RESPONSE);
    if (all) {
    let parsedItAll= JSON.parse(all);
    return {
      user: parsedItAll.user,
      access_token: parsedItAll.access_token
    };
    }

    return {};
  }

  getResetToken():any {
    const token = window.sessionStorage.getItem('token');
    if (token){
      return JSON.parse(token);
    }
    return {};
  }

  
  getAccessToken():any {
    const token =window.sessionStorage.getItem(ACCESS_TOKEn);
    if (token) {
      return JSON.parse(token);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }

  public getUser(): any {
    
    const user =window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
