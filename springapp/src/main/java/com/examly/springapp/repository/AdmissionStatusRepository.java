package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.examly.springapp.model.AdmissionStatus;

public interface AdmissionStatusRepository extends JpaRepository<AdmissionStatus,Integer> {

	@Query(value="select *from admission_status where status_name=:statusname",nativeQuery=true)
	public AdmissionStatus findStatus(@Param("statusname") String statusname);
	
}
