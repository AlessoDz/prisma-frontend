import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html',
  styleUrl: './sidebar-student.component.css'
})
export class SidebarStudentComponent implements OnInit {

  constructor(public login:LoginService) { }

  ngOnInit(): void {

  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
