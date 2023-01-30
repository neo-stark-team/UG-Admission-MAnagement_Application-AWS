import { Component, OnInit } from '@angular/core'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { AdmissionService } from 'src/app/services/admission.service'; 
import Swal from 'sweetalert2'; 

@Component({ 
  selector: 'app-checkingadmission', 
  templateUrl: './checkingadmission.component.html', 
  styleUrls: ['./checkingadmission.component.css'] 
}) 
export class CheckingadmissionComponent implements OnInit { 
  constructor(private route:ActivatedRoute,private admissisonservice:AdmissionService,private router:Router,private snack:MatSnackBar) { }

  admissionId; 
  admission; 

  ngOnInit(): void { 
    this.admissionId=this.route.snapshot.params['admissionId']; 
   this.getAdmission(this.admissionId); 
 
  } 
 
  //get addmission function 
  getAdmission(admissionId){ 
      this.admissisonservice.getAdmission(admissionId).subscribe((data:any)=>{ 
        this.admission=data; 
      }) 
  } 

  onSubmit(){ 
 
  } 
  cancel(){ 
    this.router.navigate(['/admin/students']); 
  } 

  //approveapplication function 
  approveApplication(admissionId){ 
    this.admissisonservice.approveApplication(admissionId).subscribe((data:any)=> 
    { 
        
       Swal.fire('Successfully Approved !!', 'Application ID: ' + data.admissionId, 'success'); 
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

  //rejectapplication function
  rejectApplication(admissionId){ 
    this.admissisonservice.rejectApplication(admissionId).subscribe((data:any)=> 
    { 
        
       Swal.fire('Admission rejection success !!', 'Application ID: ' + data.admissionId, 'success'); 
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

} 
