import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { authInterceptorProviders } from './auth.interceptor';
import { SignupComponent } from './pages/signup/signup.component';
import { ViewacademyComponent } from './pages/user/viewacademy/viewacademy.component';
import { EnrolledcourseComponent } from './pages/user/enrolledcourse/enrolledcourse.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AdminacademyComponent } from './pages/admin/adminacademy/adminacademy.component';
import { AdmincourseComponent } from './pages/admin/admincourse/admincourse.component';
import { AdminstudentComponent } from './pages/admin/adminstudent/adminstudent.component';
import { AdminapprovedapplicationsComponent } from './pages/admin/adminapprovedapplications/adminapprovedapplications.component';
import { AdminrejectedapplicationsComponent } from './pages/admin/adminrejectedapplications/adminrejectedapplications.component';
import { SearchComponent } from './components/search/search.component';
import { UsermanagementComponent } from './pages/admin/usermanagement/usermanagement.component';
import { UserdataComponent } from './pages/admin/userdata/userdata.component';
import { ChangepasswordComponent } from './pages/admin/changepassword/changepassword.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAcademyComponent } from './pages/admin/edit-academy/edit-academy.component';
import { AddacademyComponent } from './pages/admin/addacademy/addacademy.component';
import { AddcourseComponent } from './pages/admin/addcourse/addcourse.component';
import { EditcourseComponent } from './pages/admin/editcourse/editcourse.component';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ViewcourseComponent } from './pages/user/viewcourse/viewcourse.component';
import { StudentComponent } from './pages/user/student/student.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Date_Formmat } from './date-format';
import { EditadmissionComponent } from './pages/admin/editadmission/editadmission.component';
import { CheckingadmissionComponent } from './pages/admin/checkingadmission/checkingadmission.component';
import { RatingComponent } from './pages/user/rating/rating.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    LoginComponent,
    HomeComponent,
    
    SignupComponent,
    ViewacademyComponent,
    EnrolledcourseComponent,
    ProfileComponent,
    EnrolledcourseComponent,
    AdminacademyComponent,
    EditAcademyComponent,
    AddacademyComponent,
    AddcourseComponent,
    EditcourseComponent,
    AdmincourseComponent,
    AdminstudentComponent,
    AdminapprovedapplicationsComponent,
    AdminrejectedapplicationsComponent,
    SearchComponent,
    UsermanagementComponent,
    UserdataComponent,
    ChangepasswordComponent,
    ViewcourseComponent,
    StudentComponent,
    CheckingadmissionComponent,
    EditadmissionComponent,
    RatingComponent,
    ReviewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,

  ],
  
  providers: [authInterceptorProviders,{provide:MAT_DATE_FORMATS,useValue:Date_Formmat}],
  bootstrap: [AppComponent]
})
export class AppModule { }
