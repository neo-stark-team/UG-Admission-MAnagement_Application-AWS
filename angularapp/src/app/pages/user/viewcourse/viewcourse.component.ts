//imports

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CourseService } from 'src/app/services/course.service';



@Component({

  selector: 'app-viewcourse',
  
  templateUrl: './viewcourse.component.html',
  
  styleUrls: ['./viewcourse.component.css']

})

export class ViewcourseComponent implements OnInit {

  
  constructor(private courseService:CourseService,private route:ActivatedRoute) { }
  
  courses;
  
  instituteId:'';

  
  ngOnInit(): void {
  
    this.instituteId=this.route.snapshot.params['instituteid'];
    
    
    
    this.getcourses(this.instituteId);
  
  }
 

  //   It will fetches all courses using instituteid
  
  getcourses(instituteId){ 
  
    console.log(instituteId) 
    
    this.courseService.getCoursesbyInstituteId(instituteId).subscribe((data:any)=>{ 
    
      this.courses=data; 
      
      console.log(data); 
    
    }) 
  
  }


}
