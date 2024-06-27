import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {


    constructor(private httpClient: HttpClient) { }

    public añadirTeacher(user:any){
      return this.httpClient.post(`${baserUrl}/teachers/`,user);
    }

}
