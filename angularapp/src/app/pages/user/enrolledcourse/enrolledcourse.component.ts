import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-enrolledcourse',
  templateUrl: './enrolledcourse.component.html',
  styleUrls: ['./enrolledcourse.component.css']
})
export class EnrolledcourseComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router) { }
  admission;
  user;
  ngOnInit(): void {
    this.getAdmission();
    this.getUser();
  }

  getAdmission(){
    this.loginservice.getCurrentUser().subscribe((data:any)=>{
    
     if(data.admission){
      this.admission=data.admission;
    }
    })
  }
  getUser(){
    this.loginservice.getCurrentUser().subscribe((data:any)=>{
    
  
      this.user=data;
   
    })
  }
}
