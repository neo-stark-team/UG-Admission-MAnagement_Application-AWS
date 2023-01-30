import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/search.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/user.service';

@Component({ 
  selector: 'app-usermanagement', 
  templateUrl: './usermanagement.component.html', 
  styleUrls: ['./usermanagement.component.css'] 
}) 
export class UsermanagementComponent implements OnInit { 

  p:number=1; 
  searchtext:any; 
  users:any[]; 
  user; 
  sub:Subscription; 
  constructor(private userservice:UserService,private searchservice:SearchService) { } 

  ngOnInit(): void  { 
    this.sub=this.searchservice.cm.subscribe(data=>this.searchtext=data); 
    this.getUsers(); 

  } 

  getUsers(){ 
    this.userservice.getUsers().subscribe(data=>{ 
      this.users=data; 
      console.log(this.users); 
     
    }, 
    (error) => { 
      
      Swal.fire((error.error.message),'error'); 
      //alert('Something Wrong'); 

    }) 
  } 
  deleteUser(id:number){ 
    this.userservice.deleteUser(id).subscribe( 
     (data:any)=> { 
    Swal.fire((data.message),'successfull','success'); 
     this.getUsers(); 
    }, 
    (error) => { 
      
      Swal.fire((error.error.message),'error'); 
      //alert('Something Wrong'); 

    } 
    ); 
    
  } 
  openUserdata(id:number){ 
    
    this.userservice.getUserById(id).subscribe((data)=>{ 
      this.user=data; 
      console.log(this.user); 
    }, 
    (error) => { 
      
      Swal.fire((error.error.message),'error'); 
      //alert('Something Wrong'); 

    }); 
  } 


} 
