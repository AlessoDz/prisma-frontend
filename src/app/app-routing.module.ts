import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupTeacherComponent } from './pages/teacher/signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './pages/student/signup-student/signup-student.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardAdministratorComponent } from './pages/administrator/dashboard-administrator/dashboard-administrator.component';
import { DashboardStudentComponent } from './pages/student/dashboard-student/dashboard-student.component';
import { DashboardTeacherComponent } from './pages/teacher/dashboard-teacher/dashboard-teacher.component';
import { AdminGuard } from './service/admin.guard';
import { TeacherGuard } from './service/teacher.guard';
import { StudenGuard } from './service/student.guard';
import { AboutComponent } from './pages/home/about/about.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { PresentationComponent } from './pages/home/presentation/presentation.component';
import { ProfileAdministratorComponent } from './pages/administrator/profile-administrator/profile-administrator.component';
import { ProfileStudentComponent } from './pages/student/profile-student/profile-student.component';
import { ProfileTeacherComponent } from './pages/teacher/profile-teacher/profile-teacher.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  { path: 'contact', 
    component: ContactComponent,
    pathMatch:'full'
  },
  { path: 'presentation', 
    component: PresentationComponent,
    pathMatch:'full'
  },
  { path: 'about', 
    component: AboutComponent,
    pathMatch:'full'
  },
  {
    path : 'signupTeacher',
    component : SignupTeacherComponent,
    pathMatch : 'full'
  },
  {
    path : 'signupStudent',
    component : SignupStudentComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path : 'administrator',
    component : DashboardAdministratorComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileAdministratorComponent
      },
    ]
  },
  {
    path : 'teacher',
    component : DashboardTeacherComponent,
    canActivate:[TeacherGuard],
    children:[
      {
        path:'profile',
        component:ProfileTeacherComponent
      },
    ]
  },
  {
    path : 'student',
    component : DashboardStudentComponent,
    canActivate:[StudenGuard],
    children:[
      {
        path:'profile',
        component:ProfileStudentComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
