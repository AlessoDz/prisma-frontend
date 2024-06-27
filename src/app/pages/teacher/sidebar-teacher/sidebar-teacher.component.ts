import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrl: './sidebar-teacher.component.css'
})

export class SidebarTeacherComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {

  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}

