import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AddacademyComponent } from './pages/admin/addacademy/addacademy.component';
import { AddcourseComponent } from './pages/admin/addcourse/addcourse.component';
import { AdminacademyComponent } from './pages/admin/adminacademy/adminacademy.component';
import { AdminapprovedapplicationsComponent } from './pages/admin/adminapprovedapplications/adminapprovedapplications.component';
import { AdmincourseComponent } from './pages/admin/admincourse/admincourse.component';
import { AdminrejectedapplicationsComponent } from './pages/admin/adminrejectedapplications/adminrejectedapplications.component';
import { AdminstudentComponent } from './pages/admin/adminstudent/adminstudent.component';
import { ChangepasswordComponent } from './pages/admin/changepassword/changepassword.component';
import { CheckingadmissionComponent } from './pages/admin/checkingadmission/checkingadmission.component';
import { EditAcademyComponent } from './pages/admin/edit-academy/edit-academy.component';
import { EditadmissionComponent } from './pages/admin/editadmission/editadmission.component';
import { EditcourseComponent } from './pages/admin/editcourse/editcourse.component';
import { UserdataComponent } from './pages/admin/userdata/userdata.component';
import { UsermanagementComponent } from './pages/admin/usermanagement/usermanagement.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EnrolledcourseComponent } from './pages/user/enrolledcourse/enrolledcourse.component';
import { RatingComponent } from './pages/user/rating/rating.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { StudentComponent } from './pages/user/student/student.component';
import { ViewacademyComponent } from './pages/user/viewacademy/viewacademy.component';
import { ViewcourseComponent } from './pages/user/viewcourse/viewcourse.component';
import { UserGuard } from './user.guard';
import { ReviewsComponent } from './pages/reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  
  {path:'admin',canActivate:[AdminGuard],
  children:[
  {path:'',redirectTo:'institutes',pathMatch:'full'}, 
  {path:'institutes',component:AdminacademyComponent},
  {path:'institutes/add',component:AddacademyComponent},
  {path:'institutes/reviews/:instituteid',component:ReviewsComponent},
  {path:'institutes/:instituteid',component:EditAcademyComponent},
  {path:'courses',component:AdmincourseComponent},
  {path:'courses/add',component:AddcourseComponent},
  {path:'courses/:courseid',component:EditcourseComponent},
  {path:'students',component:AdminstudentComponent},
  {path:'students/check/:admissionId',component:CheckingadmissionComponent},
  {path:'students/edit/:admissionId',component:EditadmissionComponent},
  {path:'users',component:UsermanagementComponent},
  {path:'users/:userId',component:UserdataComponent},
  {path:'users/:userId/changepassword',component:ChangepasswordComponent},
  {path:'approved',component:AdminapprovedapplicationsComponent},
  {path:'approved/edit/:admissionId',component:EditadmissionComponent},
  {path:'rejected',component:AdminrejectedapplicationsComponent},
  ]},
  
  {path:'user',canActivate:[UserGuard],
  children:[
  {path:'',redirectTo:'viewinstitute',pathMatch:'full'},
  {path:'viewinstitute',component:ViewacademyComponent},
  {path:'viewinstitute/reviews/:instituteid',component:ReviewsComponent},
  {path:'viewinstitute/:instituteid',component:ViewcourseComponent},
  {path:'viewinstitute/:instituteid/:courseid',component:StudentComponent},
   {path:'enrolledcourse',component:EnrolledcourseComponent},
   {path:'enrolledcourse/rate/:instituteid',component:RatingComponent},
   {path:'profile',component:ProfileComponent},

]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
