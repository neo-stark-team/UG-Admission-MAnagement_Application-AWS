import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({ 
  selector: 'app-reviews', 
  templateUrl: './reviews.component.html', 
  styleUrls: ['./reviews.component.css'] 
}) 
export class ReviewsComponent implements OnInit {  

  constructor(private reviewservice:ReviewService,private route:ActivatedRoute) { }
  reviews; 
  instituteId;  
  // routing of reviews  
  ngOnInit(): void {  
    this.instituteId=this.route.snapshot.params['instituteid'];  
    this.reviewservice.getallReviews(this.instituteId).subscribe((data:any)=>{ 
      this.reviews=data;   
      console.log(data);   
    }) 

  } 

} 
