
// import the requriments  


import { Component, OnInit } from '@angular/core';  
import { MatSnackBar } from '@angular/material/snack-bar';  
import { Router } from '@angular/router';  
import { InstituteService } from 'src/app/services/institute.service';  
import Swal from 'sweetalert2';  
 
@Component({  
  selector: 'app-addacademy',  
  templateUrl: './addacademy.component.html',  
  styleUrls: ['./addacademy.component.css']  
})  

//export addacademyComponent 

export class AddacademyComponent implements OnInit {  

  
  constructor(private instituteService: InstituteService,private snack: MatSnackBar,private router:Router) { }  

  ngOnInit(): void {    
    
  }    

  IDExist=""    
   
 
  institute={     
    instituteId:'',   
    instituteName:'',   
    mobile:'',   
    email:'',   
    
    instituteDescription:'',   
    imageUrl:'',    
    instituteAddress:''   
  };   
 
//onSubmit method is used    
     
  onSubmit() {   
           
    //check whether     
     
    if (this.institute.instituteId == '' || this.institute.instituteId == null) {   
       
      this.snack.open("Email is required !! ", '', {   
        duration: 3000,   
        
        // verticalPosition: 'top',    
        // horizontalPosition: 'right',   
        
      });   
      return;   
    }       
    if (this.institute.email == '' || this.institute.email == null) {   
      this.snack.open("Email is required !! ", '', {   
        duration: 3000,   
        // verticalPosition: 'top',     
        // horizontalPosition: 'right',    
      });       
      
        
      return;    
    }   
    
    if (this.institute.instituteName.trim() == '' || this.institute.instituteName == null) {    
      this.snack.open("institutename is required !! ", '', {     
        duration: 3000,       
      });        
      
      return;       
    }  
    
    if(this.institute.mobile == '' || this.institute.mobile== null) {  
      this.snack.open("Mobile Number is required !! ", '', {   
        duration: 3000,   
      });  
      
      return;  
    }  
    
    if (this.institute.instituteAddress == '' || this.institute.instituteAddress== null) {   
      this.snack.open("Mobile Number is required !! ", '', {   
        duration: 3000,   
      });   
      
      return;  
    } 
    if (this.institute.instituteDescription == '' || this.institute.instituteDescription== null) {  
      this.snack.open("Mobile Number is required !! ", '', {  
        duration: 3000,  
      });   
      return;   
    }   
     
      this.instituteService.addInstitute(this.institute).subscribe((data:any)=>   
      {   
          
         Swal.fire('Successfully Added !!', 'Institute Name : ' + data.instituteName, 'success');   
         this.router.navigate(['admin/institutes']);   
      },   
                                                                   
      (error) => {   
         
        console.log("mes");    
        console.log(error.message)   
         
        //alert('Something Wrong');  
        this.snack.open(error.error.message, '', {   
          duration: 5000,   
        });   
        
      });   
       
  }      
     
 
  checkId(){   
      console.log("calle")    
    this.instituteService.checkInstituteId(this.institute.instituteId).subscribe((data)=>   
    {   
      this.IDExist='';   
    },     
                                                                                  
    (error) => {    
      this.IDExist=error.error.message;     
     console.log(error);      
     this.ngOnInit();   
      
       
      //alert('Something Wrong');     
              
    })    
     
     
  }    
 
  
     
   
      
} 
