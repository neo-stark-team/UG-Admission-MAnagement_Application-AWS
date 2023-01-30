

import { Component, OnInit } from '@angular/core';  
import { MatSnackBar } from '@angular/material/snack-bar';  
import { ActivatedRoute, ParamMap, Router } from '@angular/router';  
import { InstituteService } from 'src/app/services/institute.service';  
import Swal from 'sweetalert2'; 

@Component({  
  selector: 'app-edit-academy',   
  templateUrl: './edit-academy.component.html',   
  styleUrls: ['./edit-academy.component.css']     
})      
export class EditAcademyComponent implements OnInit  {   
      
  constructor(private instituteservice:InstituteService,private route:ActivatedRoute,private router:Router,private snack: MatSnackBar) { } 

  ngOnInit(): void {     
    
    this.instituteId=this.route.snapshot.params['instituteid'];   
      
    this.getInstitute(this.instituteId);    
          
  }     
  insti={     
    instituteId:'',  
     
    instituteName:'',  
     
    mobile:'',
    
    email:'vtumail',  
     
    instituteDescription:'',  
    
    imageUrl:'',  
    
    instituteAddress:''  
    
  };  
  instituteId;  
  

  getInstitute(id){   
  this.instituteservice.getInstitute(id).subscribe((data:any)=>{   
    console.log(data)    
    this.insti=data;  
    console.log(this.insti);  
  });   
    
  }  
  
// submitting 
  
  onSubmit() {      
    this.instituteservice.editInstitute(this.insti.instituteId,this.insti).subscribe((data:any)=>{    
      console.log(data);    
      Swal.fire('Successfully Edited !!', 'Institute Name : ' + data.instituteName, 'success');       
      this.router.navigate(['admin/institutes']);      
    },     
    (error) => {  
          
      console.log("mes");   
      
      console.log(error.message)  
      
      //alert('Something Wrong');      
      
      this.snack.open(error.error.message, '', {   
        
        duration: 5000,  
        
      });    
      
    }  
                                                                                     
    )  
    
  }  
  
 
}  

 



  
 
