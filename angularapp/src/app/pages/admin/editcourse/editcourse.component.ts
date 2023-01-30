import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import Swal from 'sweetalert2';

import { ActivatedRoute, Router } from '@angular/router';

import { CourseService } from 'src/app/services/course.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({

  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']

})

export class EditcourseComponent implements OnInit {

  
  constructor(private route:ActivatedRoute,private courseservice:CourseService,private snack:MatSnackBar,private router:Router) { }
  courseId;
  course;
   ngOnInit(): void {
     this.courseId=this.route.snapshot.params['courseid'];
     this.getCourse(this.courseId);
  
   }
   
  getCourse(courseId){
     this.courseservice.getCourse(courseId).subscribe((data:any)=>{
         this.course=data;
  
     })
   
  }
  
  onSubmit(){
  
    if (this.course.courseName.trim() == '' || this.course.courseName == null) {
       this.snack.open("institutename is required !! ", '', {
    
         duration: 3000,
       
       });
       
      return;
     
    }
    
    if (this.course.courseDescription == '' || this.course.courseDescription== null) {
    
      this.snack.open("Mobile Number is required !! ", '', {
      
        duration: 3000,
       
      });
      
      return;
     
    }
    
    if (this.course.courseDuration == '' || this.course.courseDuration== null) {
    
      this.snack.open("Mobile Number is required !! ", '', {
      
        duration: 3000,
       
      });
      
      return;
     
    }
    
    if (this.course.institute.instituteId == '' || this.course.institute.instituteId== null) {
    
      this.snack.open("Mobile Number is required !! ", '', {
      
        duration: 3000,
       
      });
      
      return;
     
    }
     
    
    this.courseservice.updateCourse(this.course).subscribe((data:any)=>
    
           {
          
          Swal.fire('Successfully Added !!', 'course Name : ' + data.courseName, 'success');
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
 
}
 
