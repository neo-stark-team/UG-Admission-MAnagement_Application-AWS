

package com.examly.springapp.serviceimpl;


//imports




import java.util.List;


import java.util.Optional;


import com.examly.springapp.model.CourseModel;


import com.examly.springapp.repository.CourseRepository;


import org.springframework.stereotype.Service;


import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;



@Service


public class CourseService {

	
	@Autowired
	
	
	private CourseRepository courserepo;

	
	
	public List<CourseModel> findAll()
	
	
	{
	
		return courserepo.findAll();
	
	}

	
	public CourseModel save(CourseModel course) {
	
		return courserepo.save(course);
	
	}

	
	public boolean findById(int courseId) {
	
		
		Optional<CourseModel> course=courserepo.findById(courseId);
		
		
		if(course.isPresent()) {
		
			
			return true;
		
		
		}
		
		
		return false;
	
	
	}

	
	
	public Boolean delete(int courseId) {
	
		
		courserepo.deleteById(courseId);
	   
		
		return true;
	
	
	}

	
	
	public CourseModel getCourse(Integer courseId) {
	
		
		CourseModel course=courserepo.findById(courseId).get();
		
		
		return course;
	
	
	}

	
	
    
	
	public Set<CourseModel> findCourses(Integer instituteId) {
	
		
		Set<CourseModel> course=courserepo.findCourses(instituteId);
		
		
		return course;
	
	
	}
	

}
