
import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { Subscription } from 'rxjs'; 
import { SearchService } from 'src/app/search.service'; 
import { AdmissionService } from 'src/app/services/admission.service'; 

@Component({  
  selector: 'app-adminrejectedapplications',  
  templateUrl: './adminrejectedapplications.component.html',  
  styleUrls: ['./adminrejectedapplications.component.css']  
}) 
export class AdminrejectedapplicationsComponent implements OnInit {  

  
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
    this.admissionservice.getallRejectedAdmissions().subscribe((data:any)=>{ 
       this.admissions=data;  
    })   
  }  

  

}  
