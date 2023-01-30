
import { Component, OnInit } from '@angular/core'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { LoginService } from 'src/app/login.service'; 
import { AdmissionService } from 'src/app/services/admission.service'; 
import Swal from 'sweetalert2'; 
@Component({ 
  selector: 'app-editadmission', 
  templateUrl: './editadmission.component.html', 
  styleUrls: ['./editadmission.component.css'] 
}) 
export class EditadmissionComponent implements OnInit { 

  
  constructor(private admissionService:AdmissionService,private route:ActivatedRoute,private router:Router,private snack:MatSnackBar,private loginservice:LoginService) {  }
  admissionId; 
  courses; 
  user; 

 admission; 
  ngOnInit(): void { 
    
    this.admissionId=this.route.snapshot.params['admissionId']; 
    this.getAdmission(this.admissionId); 
    var co=document.getElementById("courseselect"); 
    
   
  } 

  //getaddmission function 
  getAdmission(admissionId){ 
    this.admissionService.getAdmission(admissionId).subscribe((data:any)=>{ 
      this.admission=data; 
      this.getcourses(); 
    }) 
  } 

  //on submit function 
  onSubmit(){ 
    this.admissionService.editAdmission(this.admission).subscribe((data:any)=> 
    { 
       
       Swal.fire('Successfully Edited !!', 'Application ID: ' + data.admissionId, 'success'); 
       this.router.navigate(['admin/students']); 
       
    }, 
    (error) => { 
      
      console.log(error.message) 
      //alert('Something Wrong'); 
      this.snack.open(error.error.message, '', { 
        duration: 5000, 
      }); 
     
    });  
    
  } 
  cancel(){ 
    this.router.navigate(['/admin/students']); 
  } 
  getcourses(){ 
    this.admissionService.getCourses(this.admission.course.institute.instituteId).subscribe((data:any)=>{ 
      this.courses=data; 
      console.log(data); 
    }) 
  } 

  onChange(event){ 
    let courseId = event.value; 
    this.admission.course.courseId=courseId; 
  } 
}
