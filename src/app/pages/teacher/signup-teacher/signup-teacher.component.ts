import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { TeacherService } from '../../../service/teacher.service';

@Component({
  selector: 'app-signup-teacher',
  templateUrl: './signup-teacher.component.html',
  styleUrl: './signup-teacher.component.css'
})

export class SignupTeacherComponent implements OnInit {

  public user = {
    email : '',
    password : '',
    name : '',
    lastname : '',
    phone : ''
  }

  constructor(private teacherService:TeacherService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.email == '' || this.user.email == null){
      this.snack.open('El correo es requerido','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.teacherService.añadirTeacher(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Docente guardado','Teacher registrado con éxito en el sistema','success');
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema','Aceptar',{
          duration : 3000
        });
      }
    )
  }

}

