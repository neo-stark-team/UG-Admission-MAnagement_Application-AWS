 
import { Component, OnInit } from '@angular/core'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { LoginService } from 'src/app/login.service'; 
import { AdmissionService } from 'src/app/services/admission.service'; 
import Swal from 'sweetalert2'; 
@Component({ 
  selector: 'app-student', 
  templateUrl: './student.component.html', 
  styleUrls: ['./student.component.css'] 
}) 
export class StudentComponent implements OnInit { 
 
  user; 
   
 
  constructor(private route:ActivatedRoute,private loginservice:LoginService,private admissionservice:AdmissionService,private snack:MatSnackBar,private router:Router) { } 
  admission={ 
    student:{ 
    studentName:'', 
    mobile:'', 
    studentDOB:'', 
    studentGender:'', 
    address:'',  
    sslc:'', 
    hsc:'', 
    diploma:'' 
  }, 
    course:{ 
      courseId:'' 
    } 
  } 
 
   
 
  ngOnInit(): void { 
    this.admission.course.courseId=this.route.snapshot.params['courseid']; 
    this.getCurrentUser(); 
    
     
  } 
 
  onSubmit(){ 
    this.admissionservice.saveAdmission(this.user.id,this.admission).subscribe((data:any)=>{ 
      console.log(data); 
      Swal.fire('Successfully Applied !!', 'admission ID:' + data.admission.admissionId, 'success'); 
      this.router.navigate(['user/enrolledcourse']); 
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
  getCurrentUser(){ 
    this.loginservice.getCurrentUser().subscribe((data:any)=>{ 
     this.user=data; 
     console.log(data); 
     if(data.admission){ 
      Swal.fire('Already admission Placed', 'admission ID:' + data.admission.admissionId, 'warning'); 
      this.router.navigate(['user/enrolledcourse']); 
    } 
    }) 
  } 
 
} 
  
