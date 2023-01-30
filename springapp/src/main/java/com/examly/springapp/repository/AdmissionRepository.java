package com.examly.springapp.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examly.springapp.model.Admission;


public interface AdmissionRepository extends JpaRepository<Admission,Integer> {
	
	@Query(value="select *from admission inner join admission_status where admission_status_admission_status_id=admission_status.admission_status_id and status_name=:status",nativeQuery=true)
	public Set<Admission> getApplication(@Param("status") String status);
	
	
	
	
	

}

