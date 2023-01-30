import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Observable, Subject, throwError, } from 'rxjs'; 

 


@Injectable({ 
  
    providedIn: 'root'
}) 

export class LoginService { 
  
  private url="http://35.170.243.30:8080"; 
  
  public loginStatusSubject = new Subject<boolean>(); 
  

  constructor(private http:HttpClient) { } 
  

  //current user: which id loggedin
  
  public getCurrentUser(){
    
    return this.http.get(`${this.url}/current-user`); 
    
  } 
  
  

  //generate token  
  public generateToken(loginData:any):Observable<any>{
     
    return this.http.post(`${this.url}/generate-token`, loginData);  
    
  }   
  

  //Login user: set token in LocalStorage  
  
  public loginUser(token){    
    
    localStorage.setItem('token',token);
    
    
    return true;  
  }  

  //isLogin: user is Logged in or not  
  
  public isLoggedIn(){ 
    let tokenStr=localStorage.getItem('token') 
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){ 
      
      return false; 
      
    } else { 
      return true; 
    } 
  } 

  // Logout : remove token from local storage
  public logout(){ 
    localStorage.removeItem('token'); 
    localStorage.removeItem('user');  
    return true; 
  } 

  //get token  
  public getToken(){ 
    return localStorage.getItem('token'); 
  }  
 
  //set userDetail 
  public setUser(user){  
    localStorage.setItem('user',JSON.stringify(user));   
  }  
  
  
  
  //getUser  
  public getUser(){  
       
    let userStr=localStorage.getItem('user');
    
    
    
    if(userStr!=null){  
      return JSON.parse(userStr);  
    } else {   
      this.logout();  
      return null;   
    }  
  }  

  //get user role  
  public getUserRole(){  
    let user=this.getUser()  
    // return user.authorities[0].authority;  
    
    return user.role.roleName;  
  } 
  
}  

  // public addUser(user:any){   

  //   return this.http.get(`${baseUrl}/user/`, user);  

  // }   

