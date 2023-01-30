//importing all  the modules 

import { Component, OnInit, ViewChild } from '@angular/core';  


import { FormGroup, FormBuilder,Validators, NgForm, FormControl } from '@angular/forms';  


import { MatSnackBar } from '@angular/material/snack-bar';  


import { Router } from '@angular/router';  


import { CourseService } from 'src/app/services/course.service'; 


import { InstituteService } from 'src/app/services/institute.service';  


import Swal from 'sweetalert2';  




@Component({  

  
  
  selector: 'app-addcourse', 
  
  templateUrl: './addcourse.component.html',   
  
  styleUrls: ['./addcourse.component.css'] 
  
  

})   



export class AddcourseComponent implements OnInit {   
  


  constructor(private institueservice:InstituteService,private snack:MatSnackBar,private courseService:CourseService,private router:Router) { }   
 
  
  
  ngOnInit(): void {   
     
  
    this.institueservice.getInstitutes().subscribe((data:any)=>{   
  
      this.institutes=data;   
      
      console.log(data)   
    
      
    
    })  
    
    
    
  }  
   
  
  //After submitting the form it wil chaeck whether data is blank or null 
  
  
  
  onSubmit(){ 
       
  
  
    //Checking whether institute id is blank or null 
      
      
    
    if (this.course.institute.instituteId == '' || this.course.institute.instituteId== null) 
      
    
    {    
    
      this.snack.open("Institute selection is required !! ", '', {  
      
        duration: 3000,   
        
      });  
      
      return; 
      
      
    } 
      
    
    this.courseService.addCourse(this.course).subscribe((data:any)=> 
      
      
                                                          { 
    
      //Sending Successfully Added message 
      
      Swal.fire('Successfully Added !!', 'Course Name : ' + data.courseName, 'success'); 
        
        //Navigate to the admin/courses page 
      
      this.router.navigate(['admin/courses']); 
        
      
    }, 
                                                          
      (error) => { 
        
        console.log("mes");  
    
      console.log(error.message) 
        
        
      //alert('Something Wrong'); 
      
      this.snack.open(error.error.message, '', { 
      
        duration: 5000, 
          
        
      }); 
       
      
    }); 
      
    
  } 
    
  
  institutes:any[]; 
  
  course={ 
  
    courseName:'', 
    
    courseDescription:'',  
    
    courseDuration:'',  
    
    institute:{  
    
      instituteId:''  
      
      
      
    }  
  
   }  
  
   

   

  onChange(event:any){  
  
    
    let instituteId = event.value;  
    
    this.course.institute.instituteId=instituteId;  
    
    
  } 

  
  
} 


