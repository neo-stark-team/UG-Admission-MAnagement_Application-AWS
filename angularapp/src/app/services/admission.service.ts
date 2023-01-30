import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  constructor(private http:HttpClient) { }

  public url="http://35.170.243.30:8080"

  public saveAdmission(userid,admission){
    return this.http.post(`${this.url}/saveAdmission/${userid}`,admission);
  }
   
  public getallPendingAdmissions(){
    return this.http.get(`${this.url}/pending`);
  }
  public getallRejectedAdmissions(){
    return this.http.get(`${this.url}/rejected`);
  }
  public getallApprovedAdmissions(){
    return this.http.get(`${this.url}/approved`);
  }

  public getAdmission(admissionId){
    return this.http.get(`${this.url}/getadmission/${admissionId}`);
  }

  public approveApplication(admissionId){
    return this.http.put(`${this.url}/approve/${admissionId}`,'');
  }

  public rejectApplication(admissionId){
    return this.http.put(`${this.url}/reject/${admissionId}`,'');
  
  }
  public getCourses(instituteId){
    return this.http.get(`${this.url}/getcourses/instituteid/${instituteId}`);
  }

  public editAdmission(admission){
    return this.http.put(`${this.url}/editadmission`,admission);
  }
}
