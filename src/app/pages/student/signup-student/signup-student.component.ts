import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrl: './signup-student.component.css'
})

export class SignupStudentComponent implements OnInit {

  public user = {
    email : '',
    password : '',
    name : '',
    lastname : '', 
    phone : ''
  }

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.email == '' || this.user.email == null){
      this.snack.open('El nombre de usuario es requerido','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado','Estudiante registrado con éxito en el sistema','success');
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema','Aceptar',{
          duration : 3000
        });
      }
    )
  }

}

