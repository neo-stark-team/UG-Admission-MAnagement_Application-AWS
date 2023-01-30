package com.examly.springapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examly.springapp.model.Rating;
import java.util.List;

public interface RatingRepository extends JpaRepository<Rating,Integer>{

    @Query(value="select avg(rating) from rating where institute_iid=:instituteid",nativeQuery=true)
	public String findAvgRate(@Param("instituteid") int instituteId);


    @Query(value="select  *from rating where institute_iid=:instituteid",nativeQuery=true)
    public List<Rating> findallByin(@Param("instituteid") int instituteId);
    
}
