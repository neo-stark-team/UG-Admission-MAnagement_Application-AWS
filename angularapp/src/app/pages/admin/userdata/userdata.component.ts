import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  user;
  mailExistMessage='';
usernameExistMessage='';
mobilenoExistMessage='';
 public updateduser = {
   id:'',
  email: '',
  password: '',
  confirmpassword: '',
  mobileNumber: '',
  username: '',
};
 userId;
  constructor(private snack: MatSnackBar,private userservice:UserService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId'];
    this.openUserdata(this.userId);
  }

  openUserdata(id:number){
    
    this.userservice.getUserById(id).subscribe((data)=>{
      this.user=data;
      console.log(this.user);
    });
  }
  formSubmit(){
    this.transformdata();
    
    this.userservice.updateUser(this.userId,this.updateduser).subscribe((data:any)=>
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
   
  transformdata(){
    this.updateduser.id=this.user.id;
    this.updateduser.email=this.user.email;
    this.updateduser.username=this.user.username;
    this.updateduser.mobileNumber=this.user.mobileNumber;
  }

  cancel(){
    this.router.navigate(['admin/users']);

  }

  mailExist(){
    this.userservice.checkMail(this.user.email).subscribe((data: any)=>{
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
      this.userservice.checkUsername(this.user.username).subscribe((data: any)=>{
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
      this.userservice.checkMobileNumber(this.user.mobileNumber).subscribe((data: any)=>{
        this.mobilenoExistMessage=data.message;
        console.log(data);
      
      },
      (error) => {
       console.log(error);
        //alert('Something Wrong');
        
      }
      );
      
      }
    


}
