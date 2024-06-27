import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrl: './profile-teacher.component.css'
})

export class ProfileTeacherComponent implements OnInit{

  user:any = null;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    /*this.loginService.getCurrentUser().subscribe(
      (user:any) => {
        this.user = user;
      },
      (error) => {
        alert("error");
      }
    )*/
  }

}
