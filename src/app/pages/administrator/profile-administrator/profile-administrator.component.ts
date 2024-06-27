import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-profile-administrator',
  templateUrl: './profile-administrator.component.html',
  styleUrls: ['./profile-administrator.component.css']
})
export class ProfileAdministratorComponent implements OnInit{

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
