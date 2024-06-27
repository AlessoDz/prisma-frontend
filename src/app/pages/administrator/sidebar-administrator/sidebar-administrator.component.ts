import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-sidebar-administrator',
  templateUrl: './sidebar-administrator.component.html',
  styleUrls: ['./sidebar-administrator.component.css']
})
export class SidebarAdministratorComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {

  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
