package com.examly.springapp.repository;  

import org.springframework.data.jpa.repository.JpaRepository;  
import org.springframework.data.jpa.repository.Query;  
import org.springframework.data.repository.query.Param;  

import com.examly.springapp.model.Role;  
 

public interface RoleRepository extends JpaRepository<Role,Integer> {  

	
	@Query(value="select *from role where role_name=:rolename",nativeQuery=true)  
	public Role roleExist(@Param("rolename") String rolename);  
	
	 
}  
   
