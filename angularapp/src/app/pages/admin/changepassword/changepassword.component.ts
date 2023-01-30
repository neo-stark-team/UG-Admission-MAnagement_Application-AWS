import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({ 
  selector: 'app-changepassword', 
  templateUrl: './changepassword.component.html', 
  styleUrls: ['./changepassword.component.css'] 
}) 
export class ChangepasswordComponent implements OnInit { 

  constructor(private snack: MatSnackBar,private userservice:UserService,private router:Router) { } 

  user; 

  ngOnInit(): void { 
  } 

  cancel(){ 
    this.router.navigate(['admin/users']); 

  } 
  
  formSubmit(){ 
    
    
    this.userservice.updateUser(1,this.user).subscribe((data:any)=> 
    { 
      
      Swal.fire('USERID:-'+data.id,'edited success','success'); 
      this.router.navigate(['admin/users']); 
      
    }), 
    (error) => { 
      console.log(error); 
      //alert('Something Wrong'); 
      this.snack.open(error.error.message, '', { 
        duration: 5000, 
      }); 
    } 
  } 

 

} 
