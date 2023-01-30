import { Component, OnInit } from '@angular/core'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { LoginService } from 'src/app/login.service'; 
import { ReviewService } from 'src/app/services/review.service'; 
import Swal from 'sweetalert2'; 
@Component({ 
  selector: 'app-rating', 
  templateUrl: './rating.component.html', 
  styleUrls: ['./rating.component.css'] 
}) 
export class RatingComponent implements OnInit {   

  constructor(private route:ActivatedRoute, private router:Router, private snack:MatSnackBar, private loginservice:LoginService, private reviewservice:ReviewService) { }
 rating={   
   rating:'',  
   review:'',  
   institute:{   
     instituteId:''   
   }  
 };   
 userId;    
  ngOnInit(): void {   
    this.rating.institute.instituteId=this.route.snapshot.params['instituteid'];   
    this.getUser();    
             
  } 

  getUser(){    
    this.loginservice.getCurrentUser().subscribe((data:any)=>{    
  
      this.userId=data.id;    
          
          
    })
  }
 // submitting rating
  onSubmit(){     
    
    this.reviewservice.addReview(this.userId,this.rating).subscribe((data:any)=>{  
      Swal.fire('Successfully Added !!', "review", 'success');   
      this.router.navigate(['/user/enrolledcourse'])   
    })       
          
  }
  //cancel the rating
  cancel(){         
    this.router.navigate(['/user/enrolledcourse'])    
            
  }   
  
  //onchange event 
  onChange(event){   
    let rate = event.value;  
    this.rating.rating=rate;   
  }    
         
}      
