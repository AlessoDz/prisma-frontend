import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupTeacherComponent } from './pages/teacher/signup-teacher/signup-teacher.component';
import { SignupStudentComponent } from './pages/student/signup-student/signup-student.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './pages/home/about/about.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { PresentationComponent } from './pages/home/presentation/presentation.component';
import { PromotionComponent } from './pages/home/promotion/promotion.component';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashboardStudentComponent } from './pages/student/dashboard-student/dashboard-student.component';
import { DashboardTeacherComponent } from './pages/teacher/dashboard-teacher/dashboard-teacher.component';
import { DashboardAdministratorComponent } from './pages/administrator/dashboard-administrator/dashboard-administrator.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileAdministratorComponent } from './pages/administrator/profile-administrator/profile-administrator.component';
import { ProfileTeacherComponent } from './pages/teacher/profile-teacher/profile-teacher.component';
import { ProfileStudentComponent } from './pages/student/profile-student/profile-student.component';
import { SidebarAdministratorComponent } from './pages/administrator/sidebar-administrator/sidebar-administrator.component';
import { SidebarTeacherComponent } from './pages/teacher/sidebar-teacher/sidebar-teacher.component';
import { SidebarStudentComponent } from './pages/student/sidebar-student/sidebar-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupTeacherComponent,
    SignupStudentComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PresentationComponent,
    PromotionComponent,
    DashboardStudentComponent,
    DashboardTeacherComponent,
    DashboardAdministratorComponent,
    FooterComponent,
    ProfileAdministratorComponent,
    ProfileTeacherComponent,
    ProfileStudentComponent,
    SidebarAdministratorComponent,
    SidebarTeacherComponent,
    SidebarStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  providers: [authInterceptorProviders,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
