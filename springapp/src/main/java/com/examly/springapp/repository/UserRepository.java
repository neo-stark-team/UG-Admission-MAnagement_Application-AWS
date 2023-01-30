package com.examly.springapp.repository; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.jpa.repository.Query; 
import org.springframework.data.repository.query.Param; 

import com.examly.springapp.model.User;  
 


public interface UserRepository extends JpaRepository<User,Long> { 
	 
	public User findByUsername(String username); 
	public User findByEmail(String email); 
	public User findByMobileNumber(String number); 
	
	@Query(value="select username from user where email=:mail",nativeQuery=true) 
	public String findUsername(@Param("mail") String mail); 
	
}  
