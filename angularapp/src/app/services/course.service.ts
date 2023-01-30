import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public url="http://35.170.243.30:8080"

  constructor(private http:HttpClient) { }
  public addCourse(course:any){
    return this.http.post(`${this.url}/addcourse`,course);

  }
  public getCourses(){
    return this.http.get(`${this.url}/getcourses`);
  }
  public getCoursesbyInstituteId(instituteId){
    
    return this.http.get(`${this.url}/getcourses/instituteid/${instituteId}`);
  }
  public deleteCourse(courseId){
    return this.http.delete(`${this.url}/deletecourse/${courseId}`);
  }

  public getCourse(courseId){
    return this.http.get(`${this.url}/getcourse/${courseId}`)
  }
  public updateCourse(course){
    return this.http.post(`${this.url}/updatecourse`,course);
  }
}
