import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
 
@Injectable({ 
  providedIn: 'root' 
}) 
export class UserService { 
  private baseurl="http://35.170.243.30:8080"; 
  constructor( private http:HttpClient) { } 
 
  public addUser(user:any){ 
    return this.http.post(`${this.baseurl}/user/signup`,user); 
 
  } 
 
  public checkMail(email:string){ 
    console.log("calling service") 
    return this.http.get<any>(`${this.baseurl}/check-email?mail=${email}`); 
  } 
   
public checkUsername(username:string){ 
  return this.http.get<any>(`${this.baseurl}/check-username?username=${username}`) 
} 
 
public checkMobileNumber(mobileno:string){ 
  return this.http.get<any>(`${this.baseurl}/check-mobileno?mobileno=${mobileno}`) 
} 
 
public adminRoleName(){ 
  return this.http.get<any>(`${this.baseurl}/AdminRoleName`); 
} 
public userroleName(){ 
  return this.http.get<any>(`${this.baseurl}/UserRoleName`); 
} 
 
 
getUsers():Observable<any[]>{ 
     
  return this.http.get<any[]>(`${this.baseurl}/user/all`) 
} 
deleteUser(userId){ 
  console.log(userId) 
  return this.http.delete(`${this.baseurl}/user/delete/${userId}`) 
} 
 
getUserById(userId){ 
  console.log(userId); 
  return this.http.get(`${this.baseurl}/user/get/${userId}`); 
} 
 
updateUser(userId,user){ 
   
  return this.http.put(`${this.baseurl}/user/edit/${userId}`,user) 
} 
 
updatePassword(userId,user){ 
   
  return this.http.put(`${this.baseurl}/user/changepassword/${userId}`,user) 
} 
 
} 
