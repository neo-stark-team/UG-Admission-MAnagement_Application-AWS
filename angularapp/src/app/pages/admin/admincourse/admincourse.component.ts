import { Component, OnInit } from '@angular/core'; 

import { Subscription } from 'rxjs'; 

import { SearchService } from 'src/app/search.service';  

import { CourseService } from 'src/app/services/course.service'; 

import Swal from 'sweetalert2'; 


@Component({

  
  
  selector: 'app-admincourse',  
  
  templateUrl: './admincourse.component.html',  
  
  styleUrls: ['./admincourse.component.css'] 
  
  
}) 
 

export class AdmincourseComponent implements OnInit {  
  


  constructor(private courseservice:CourseService,private searchservice:SearchService) { }  
  
  
  courses;  
  
  searchtext:any;  
  
  sub:Subscription;  
 
  ngOnInit(): void {  
   
  
    this.sub=this.searchservice.cm.subscribe(data=>this.searchtext=data);  
   
   
    //Calling getCourse()  
   
    this.getCourses(); 
   
 
  }  

  
  //getCourse() to get all the course
 
  getCourses(){  
  
    this.courseservice.getCourses().subscribe((data:any)=>{ 
    
      this.courses=data; 
      
      console.log(data); 
     
   
    })  
   
 
  } 

  
  //delete course using courseId
 
  deleteCourse(courseId){ 
  
    this.courseservice.deleteCourse(courseId)   
   
      .subscribe((res:any)=> {  
     
     
      //Allert: Successfully deleted
     
      Swal.fire('Successfully Deleted !!', res.message, 'success'); 
     
     
      //calling ngOnInit to get the course list
     
      this.ngOnInit(); 
      

    }, 
              
(error) => { 
  

      console.log("mes"); 
  
      console.log(error.message) 
     
  
      //alert('Something Wrong');
  
      //deletion unsuccessful
  
      Swal.fire('Deletion Unsuccess', error.error.message, 'error'); 
  

    }) 
   

  }  
 

} 
