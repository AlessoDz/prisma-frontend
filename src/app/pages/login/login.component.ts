import { Router } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "email" : '',
    "password" : '',
  }

  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
      this.snack.open('Necesita un nombre de usuario para poder ingresar','Aceptar',{
        duration:3000
      })
      return;
    }

    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('Necesita una contraseña para poder ingresar','Aceptar',{
        duration:3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRol() == 'ADMIN'){
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['administrator']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRol() == 'TEACHER'){
            //user dashboard
            //window.location.href = '/student';
            this.router.navigate(['teacher']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRol() == 'STUDENT'){
            //user dashboard
            //window.location.href = '/student';
            this.router.navigate(['student']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else{
            this.loginService.logout();
          }
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
    )
  }
}
