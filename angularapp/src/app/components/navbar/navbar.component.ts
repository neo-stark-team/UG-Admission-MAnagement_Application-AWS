import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { UserService } from 'src/app/user.service';
import {  Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;
  adminRoleName='';
  userRoleName='';

  constructor(public login: LoginService,public userservice:UserService,private router:Router) { }

  ngOnInit(): void {
    

    this.fetchadminRoleName();
    this.fetchuserRoleName();
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();

    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();

    });
    
   
    if(this.isLoggedIn){
      if(this.user.role.roleName=="ADMIN")
       this.router.navigate(['/admin'])
      if(this.user.role.roleName=="USER")
       this.router.navigate(['/user'])
     }

   
    
  }

  public logout(){
    this.login.logout();
    window.location.reload();
    //this.login.loginStatusSubject.next(false);
  }

// fethces adminrolename from serverside
  fetchadminRoleName(){
    this.userservice.adminRoleName().subscribe((data)=>{
      this.adminRoleName=data.role;
      
    })
  }

  fetchuserRoleName(){
    
     this.userservice.userroleName().subscribe((data)=>{
       this.userRoleName=data.role;
     })

  }
}
