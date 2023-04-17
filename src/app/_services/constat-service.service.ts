import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const CONST_API = 'http://localhost:8080/api/v1/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class ConstatService {
  constructor(private http: HttpClient) {}

 createConstat(
    
    date: string,
    place: string,
    injuries: boolean,
    materialDamage: boolean,
    insurenceCompanyName: string,
    insurenceCompanyNumber: string,
    agencyName: string,
    beginDate: string,
    endDate: string,
    driverLastName: string,
    driverFirstName: string,
    driverAddress: string,
    licenceNumber: string,
    licenceDate: string,
    witnessFullName: string,
    witnessAddress: string,
    witnessPhone: string,
    insuredLastName: string,
    insuredFirstName: string,
    insuredAddress: string,
    insuredPhone: string,
    carBrand: string,
    carType: string,
    carPlate: string,
    carDirection: string,
    initialChocPoint: string,
    observation: string,
    signature: string,
  ): Observable<any> {
    return this.http.post(
      CONST_API + 'create',
      {
        
        date,
        place,
        injuries,
        materialDamage,
        insurenceCompanyName,
        insurenceCompanyNumber,
        agencyName,
        beginDate,
        endDate,
        driverLastName,
        driverFirstName,
        driverAddress,
        licenceNumber,
        licenceDate,
        witnessFullName,
        witnessAddress,
        witnessPhone,
        insuredLastName,
        insuredFirstName,
        insuredAddress,
        insuredPhone,
        carBrand,
        carType,
        carPlate,
        carDirection,
        initialChocPoint,
        observation,
        signature,
      },
      httpOptions
    );
  }
  creatConstat(constat:any): Observable<any> {
    return this.http.post(
      CONST_API + 'create',
      {
       constat
      },
      httpOptions
    );
  }
  

  }