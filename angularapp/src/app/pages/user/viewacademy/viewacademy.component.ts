import { Component, OnInit } from '@angular/core'; 


import { Router } from '@angular/router';  

import { InstituteService } from 'src/app/services/institute.service';  

import { ReviewService } from 'src/app/services/review.service';  


@Component({  
  
  selector: 'app-viewacademy', 
  
  templateUrl: './viewacademy.component.html',  
  
  styleUrls: ['./viewacademy.component.css'] 
    
})  
export class ViewacademyComponent implements OnInit { 
  

  reviewArray:Array<{ 
    
    id:number;rate:string   
  }>=[];   

  constructor(private instituteService:InstituteService,private router:Router,private reviewservice:ReviewService) { }   
   institutes;   
  ngOnInit(): void {  
    
    this.instituteService.getInstitutes().subscribe((data)=>{ 
      
    this.institutes=data; 
      
    this.getRating(data);   
    });  
   
       
    
    
  } 

  getRating(insti){   
    
    for(let i of insti){    
      let id=i.instituteId;   
      this.reviewservice.getAvgReview(id).subscribe((data:any)=>{  
        this.reviewArray[id]=data;  
         
        
        
      })   
      console.log(this.reviewArray)  
      
      
      
      
      
    }  
      
    
    
    
    
    
   }  
  
  
  
 
  
}  
