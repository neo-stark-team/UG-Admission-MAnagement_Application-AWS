import { Component, OnInit } from '@angular/core'; 
//import { LoginService } from 'src/app/login.service'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Route, Router } from '@angular/router'; 
import { LoginService } from 'src/app/login.service'; 
import { UserService } from 'src/app/user.service'; 

@Component({ 
  selector: 'app-login', 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'], 
})

export class LoginComponent implements OnInit {
  loginData = { 
    email: '', 
    password: '', 
  };
  hide=true; 
 adminRoleName; 
 userRoleName; 
  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router,private userservice:UserService) { } 
  

  ngOnInit(): void {  
    this.fetchAdminRoleName(); 
    this.fetchUserRoleName(); 
  } 

  formSubmit() { 
    console.log(this.loginData); 
    if (this.loginData.email.trim() == '' || this.loginData.email == null) { 
      this.snack.open("Username is required !! ", '', { 
        duration: 3000, 
      }); 
      return; 
    }  

    if (this.loginData.password.trim() == '' || this.loginData.password == null) { 
      this.snack.open("Password is required !! ", '', { 
        duration: 3000, 
      }); 
      return; 
    } 

    //request to server to generate token 
    this.login.generateToken(this.loginData).subscribe( 
      (data: any) => { 
        console.log("success"); 
        console.log(data); 

        
        //login 
        this.login.loginUser(data.token); 
 
        
        this.login.getCurrentUser().subscribe(  
            
          (user: any) => {  
            
            this.login.setUser(user);  
            console.log(user);  
            //redirect ....ADMIN: admin-dashboard   
            //redirect ....USER: user-dashboard  
            if (this.login.getUserRole() == this.adminRoleName) {  
              //admin-dashboard  
              //window.location.href='/admin'  
              this.router.navigate(['/admin']);  
              this.login.loginStatusSubject.next(true); 
            } 
            else if (this.login.getUserRole() == this.userRoleName) { 
              //user-dashboard 
              //window.location.href='/user-dashboard'  
              this.router.navigate(['/user']); 
              this.login.loginStatusSubject.next(true); 
            } 
            else { 
              this.login.logout(); 

            } 
          }); 
      }, 
      (error) => { 
        
        console.log(error.error.message); 
        this.snack.open(error.error.message, '', { 
          duration: 3000, 
        }); 
      } 
    ); 
  } 
  fetchAdminRoleName(){ 
    this.userservice.adminRoleName().subscribe((data:any)=>{ 
         this.adminRoleName=data.role; 
    })} 
    fetchUserRoleName(){ 
      this.userservice.userroleName().subscribe((data:any)=>{ 
           this.userRoleName=data.role; 
      })} 


      hiding(){ 
        if(this.hide){ 
          return 'visibility_off'; 
        } 
        else{ 
          return 'visibility' 
        } 
      } 
}    

 
 

      // //addUser: loginService  
      // this.loginService.addUser(this.loginData).subscribe(  
      //   (data)=>{  
      //     console.log(data);  
      //     alert('success');  
      //   },  
      //   (error)=>{  
      //     console.log(error );   
      //     alert('something went wrong'); 
      //   } 
      // );  
