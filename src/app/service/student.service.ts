import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


    constructor(private httpClient: HttpClient) { }

    public añadirStudent(user:any){
      return this.httpClient.post(`${baserUrl}/students/`,user);
    }

}
