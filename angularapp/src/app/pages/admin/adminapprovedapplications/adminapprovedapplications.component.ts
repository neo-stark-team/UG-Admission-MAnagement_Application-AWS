import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/search.service';
import { AdmissionService } from 'src/app/services/admission.service';

@Component({ 
  selector: 'app-adminapprovedapplications', 
  templateUrl: './adminapprovedapplications.component.html', 
  styleUrls: ['./adminapprovedapplications.component.css'] 
}) 
export class AdminapprovedapplicationsComponent implements OnInit { 

  constructor(private admissionservice:AdmissionService,private router:Router,private searchservice:SearchService) { } 
  p:number=1; 
  admissions; 
  searchtext:any; 
  sub:Subscription; 
  ngOnInit(): void { 
    this.sub=this.searchservice.cm.subscribe(data=>this.searchtext=data); 
    this.getAllAdmissions(); 
  } 
  getAllAdmissions(){ 
    this.admissionservice.getallApprovedAdmissions().subscribe((data:any)=>{ 
       this.admissions=data; 
    }) 
  } 

  

} 
