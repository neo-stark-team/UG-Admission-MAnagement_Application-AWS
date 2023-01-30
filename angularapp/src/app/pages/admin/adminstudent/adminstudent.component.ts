import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/search.service';
import { AdmissionService } from 'src/app/services/admission.service';

@Component({ 
  selector: 'app-adminstudent', 
  templateUrl: './adminstudent.component.html', 
  styleUrls: ['./adminstudent.component.css'] 
}) 
export class AdminstudentComponent implements OnInit { 
  constructor(private admissionservice:AdmissionService,private router:Router,private searchservice:SearchService) { } 

  admissions; 
  searchtext:any; 
  p:number=1; 
  sub:Subscription; 
  ngOnInit(): void { 
    this.sub=this.searchservice.cm.subscribe(data=>this.searchtext=data); 
    this.getAllAdmissions(); 
  } 
  getAllAdmissions(){ 
    this.admissionservice.getallPendingAdmissions().subscribe((data:any)=>{ 
       this.admissions=data; 
    }) 
  } 

  

} 
