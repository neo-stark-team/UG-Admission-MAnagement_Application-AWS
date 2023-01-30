

package com.examly.springapp.repository;


//imports



import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;


import com.examly.springapp.model.CourseModel;


import org.springframework.data.jpa.repository.Query;


import org.springframework.data.repository.query.Param;


import java.util.Set;


@Repository


public interface CourseRepository extends JpaRepository<CourseModel, Integer> {

	
    
	@Query(value="select *from course where institute_iid=:instituteid",nativeQuery=true)
	
	
	public Set<CourseModel> findCourses(@Param("instituteid") int instituteid);


}
