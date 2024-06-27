import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {


    constructor(private httpClient: HttpClient) { }

    public añadirAdministrator(user:any){
      return this.httpClient.post(`${baserUrl}/administrators/`,user);
    }

}
