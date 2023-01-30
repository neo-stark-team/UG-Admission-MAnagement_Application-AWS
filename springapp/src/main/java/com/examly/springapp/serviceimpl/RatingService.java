package com.examly.springapp.serviceimpl; 
 
import java.util.List; 
import java.util.Optional; 
import com.examly.springapp.model.Rating; 
import com.examly.springapp.model.User; 
import com.examly.springapp.repository.RatingRepository; 
import com.examly.springapp.repository.UserRepository; 
import org.springframework.stereotype.Service; 
import java.util.Set; 
import org.springframework.beans.factory.annotation.Autowired; 
 
 
@Service 
public class RatingService { 
    @Autowired 
	private RatingRepository raterepo; 
   
    @Autowired 
    private UserRepository userrepo; 
  
    public User saveReview(Long userId,Rating review){ 
        User user=this.userrepo.findById(userId).get(); 
        user.setRating(review); 
        return userrepo.save(user); 
 
    } 
 
    public List<Rating> allReviews(Integer instituteId){ 
        return raterepo.findallByin(instituteId); 
    } 
 
	
    public String fingAvg(int instituteId){ 
        String avgrate=this.raterepo.findAvgRate(instituteId); 
	    
		 
        return avgrate; 
	    
    } 
	
} 
 
