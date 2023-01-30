import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Institute } from 'src/app/institute';
import { InstituteService } from 'src/app/services/institute.service';
import { SearchService } from 'src/app/search.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ReviewService } from 'src/app/services/review.service';

@Component({ 
  selector: 'adminacademy', 
  templateUrl: './adminacademy.component.html', 
  styleUrls: ['./adminacademy.component.css'] 
}) 

export class AdminacademyComponent implements OnInit { 

  selectedFile:File =null; 
  text=""; 
  institutes; 
  sub:Subscription; 
  searchtext:any; 
  insti={ 
    instituteId:'1', 
    instituteName:'', 
    mobile:'854', 
    email:'vtumail', 
    instituteDescription:'desc', 
    imageUrl:'', 
    instituteAddress:'adderess' 
  }; 
  
   reviewArray:Array<{ 
     id:number;rate:string 
   }>=[]; 
   
  
  constructor(private instituteService:InstituteService,private router:Router,private searchservice:SearchService,private http:HttpClient,private snack:MatSnackBar,private reiewservice:ReviewService) { } 

  ngOnInit(): void { 
    this.sub=this.searchservice.cm.subscribe(data=>this.searchtext=data); 
    this.instituteService.getInstitutes().subscribe((data:any)=> 
    { 
      this.institutes=data; 
      this.getRating(data); 
    }) 
    
    
  } 

  editAcademy(id:string){ 
      this.router.navigate(['/editAcademy',id]) 
  } 

  // editInstitute(i:Number,institute:InstituteData){ 
  //     this.instituteService.editInstitute(i,institute) 
  // } 

  deleteInstitute(id:string){ 
      this.instituteService.deleteInstitute(parseInt(id)) 
      .subscribe((res:any)=> { 
        
        Swal.fire('Successfully Deleted !!', res.message, 'success'); 
        this.ngOnInit(); 
        
   }, 
   (error) => { 
     
     console.log("mes"); 
     console.log(error.message) 
     //alert('Something Wrong'); 
     Swal.fire('Deletion Unsuccess', error.error.message, 'error'); 
    
   }) 
  } 

  getRating(insti){ 
    
   for(let i of insti){ 
     let id=i.instituteId; 
     this.reiewservice.getAvgReview(id).subscribe((data:any)=>{ 
       this.reviewArray[id]=data; 
        
     }) 
     console.log(this.reviewArray) 
     
   } 
      
  } 


}

