package com.examly.springapp.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.examly.springapp.model.User;
import com.examly.springapp.model.Rating;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.repository.RatingRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import com.examly.springapp.serviceimpl.RatingService;
import javax.validation.Valid;
import java.util.List;
import com.examly.springapp.model.Rating;

@RestController
@CrossOrigin(origins = "*")
public class RatingController {

    @Autowired
    private RatingService ratingservice;



    @PostMapping("/addReview/{userId}")
	public ResponseEntity<Object> addReview(@PathVariable("userId") Long userId,@Valid @RequestBody Rating review) {
		
		return ResponseEntity.ok(this.ratingservice.saveReview(userId,review));
	}

	@GetMapping("/allReviews/{instituteId}")
	public ResponseEntity<List<Rating>> allReviews(@PathVariable("instituteId") Integer instituteId){
      return ResponseEntity.ok(this.ratingservice.allReviews(instituteId));
	}

    


	@GetMapping("/averageRate")
	public ResponseEntity<String> findAvg(@RequestParam("instituteId") int instituteId) {
		String avgrate=this.ratingservice.fingAvg(instituteId);
		if(avgrate==null) {
			return ResponseEntity.ok("0");
		}
		avgrate=avgrate.substring(0, 4);
		
		return ResponseEntity.ok(avgrate);
	}
    
}
