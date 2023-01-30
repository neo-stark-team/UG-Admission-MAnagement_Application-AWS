import { Component, OnInit } from '@angular/core'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Router } from '@angular/router'; 
import { UserService } from 'src/app/user.service'; 
import Swal from 'sweetalert2'; 
@Component({ 
  selector: 'app-signup', 
  templateUrl: './signup.component.html', 
  styleUrls: ['./signup.component.css'] 
}) 
export class SignupComponent implements OnInit { 
//buttonDisabled: boolean=true; 
 
constructor(private snack: MatSnackBar, private userService: UserService,private router:Router) { } 
  
mailExistMessage=''; 
usernameExistMessage=''; 
mobilenoExistMessage=''; 
hide=true; 
hide2=true; 
show:boolean=false; 
 
 
 
public user = { 
  email: '', 
  password: '', 
  confirmpassword: '', 
  mobileNumber: '', 
  username: '', 
}; 
ngOnInit(): void {  
  this.mailExistMessage=''; 
this.usernameExistMessage=''; 
this.mobilenoExistMessage=''; 
} 
 
 
password() { 
  this.show = !this.show; 
} 
 
//   after form submitting it will check null or blank 
formSubmit() {   
  console.log(this.user);  
  if (this.user.email == '' || this.user.email == null) {  
    this.snack.open("Email is required !! ", '', {  
      duration: 3000,  
      // verticalPosition: 'top', 
      // horizontalPosition: 'right', 
    }); 
    return; 
  } 
  if (this.user.username.trim() == '' || this.user.username == null) { 
    this.snack.open("Username is required !! ", '', { 
      duration: 3000, 
    }); 
    return; 
  } 
  if (this.user.mobileNumber == '' || this.user.mobileNumber== null) { 
    this.snack.open("Mobile Number is required !! ", '', { 
      duration: 3000, 
    }); 
    return; 
  } 
  if (this.user.password.trim() == '' || this.user.password == null) { 
    this.snack.open("Password is required !! ", '', { 
      duration: 3000, 
    }); 
    return; 
  } 
  if (this.user.confirmpassword.trim() == '' || this.user.confirmpassword == null) { 
    this.snack.open("Confirm Password is required !! ", '', { 
      duration: 3000, 
    }); 
    return; 
  } 
  // if(this.classes[0] && this.classes[1] && this.classes[2] && this.classes[3] && this.classes[4] != null){ 
  //   return; 
  // } 
 
  //addUSER:userService 
  this.userService.addUser(this.user).subscribe( 
    (data: any) => { 
      //success 
      console.log(data); 
      //alert('success'); 
      Swal.fire('Successfully done !!', 'User id is ' + data.id, 'success') 
      this.router.navigate(['/login']); 
 
    }, 
    (error) => { 
      console.log(error); 
      //alert('Something Wrong'); 
      this.snack.open(error.error.message, '', { 
        duration: 5000, 
      }); 
      
    } 
  ); 
  //window.location.reload(); 
  // submitted = false; 
  // onReset() { 
  //   this.submitted = false; 
  //   this.formSubmit.reset(); 
  // } 
} 
 
mailExist(){ 
this.userService.checkMail(this.user.email).subscribe((data: any)=>{ 
  this.mailExistMessage=data.message; 
  console.log(data); 
 
}, 
(error) => { 
 console.log(error); 
  this.mailExistMessage=error.error.message; 
  //alert('Something Wrong'); 
   
} 
); 
 
} 
 
 
usernameExist(){ 
this.userService.checkUsername(this.user.username).subscribe((data: any)=>{ 
  this.usernameExistMessage=data.message; 
  console.log(data); 
 
}, 
(error) => { 
 console.log(error); 
 this.usernameExistMessage=error.error.message; 
  //alert('Something Wrong'); 
   
} 
); 
 
} 
 
mobileNumberExist(){ 
this.userService.checkMobileNumber(this.user.mobileNumber).subscribe((data: any)=>{ 
  this.mobilenoExistMessage=data.message; 
  console.log(data); 
 
}, 
(error) => { 
 console.log(error); 
  //alert('Something Wrong'); 
   
}  
); 
 
} 
callRegister(){ 
this.ngOnInit(); 
} 
 
 
} 
