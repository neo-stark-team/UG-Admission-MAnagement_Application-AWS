package com.examly.springapp.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import com.examly.springapp.model.Admission;
import com.examly.springapp.model.AdmissionStatus;
import com.examly.springapp.model.Student;
import com.examly.springapp.model.User;
import com.examly.springapp.serviceimpl.AdmissionService;
import com.examly.springapp.repository.AdmissionRepository;
import com.examly.springapp.repository.StudentRepository;
import antlr.collections.List;

@RestController
@CrossOrigin(origins="*")
public class AdmissionController {
	
	@Autowired
	private StudentRepository stur;
	@Autowired
	private AdmissionService admissionservice;

	@Autowired
	private AdmissionRepository admrepo;

	
	@PostMapping("/saveAdmission/{userId}")
	public ResponseEntity<Object> saveAdmission(@PathVariable("userId") Long userid,@Valid @RequestBody Admission admission)
	{
		return ResponseEntity.ok(this.admissionservice.saveAdmission(userid,admission));
	
	}

	@DeleteMapping("/deladm/{admid}")
	public void deladm(@PathVariable("admid") int admid){
        this.admrepo.deleteById(admid);
	}
	
	@GetMapping("/getadmissions")
	public ResponseEntity<Object> getAdmissions(){
		return ResponseEntity.ok(this.admissionservice.getAdmissions());
	}
	@GetMapping("/getadmission/{admissionId}")
	public ResponseEntity<Admission> getAdmission(@PathVariable Integer admissionId){
		return ResponseEntity.ok(this.admissionservice.getAdmission(admissionId));
	}
	
	@GetMapping("/approved")
	public ResponseEntity<?> getApproved(){
		return ResponseEntity.ok(this.admissionservice.getApproved());
	}
	
	@GetMapping("/pending")
	public ResponseEntity<?> getPending(){
		return ResponseEntity.ok(this.admissionservice.getPending());
	}
	
	@GetMapping("/rejected")
	public ResponseEntity<?> getRejected(){
		return ResponseEntity.ok(this.admissionservice.getRejected());
	}
	
	 @PutMapping("/editadmission")
	 public ResponseEntity<Object> editAdmission(@Valid @RequestBody Admission admission){
	
		 return ResponseEntity.ok(this.admissionservice.editAdmission(admission));
	 }
	
	
	@PutMapping("/approve/{admissionId}")
	public ResponseEntity<Object> approveApplication(@PathVariable Integer admissionId){
		return ResponseEntity.ok(this.admissionservice.approve(admissionId));
		
	}
	@PutMapping("/reject/{admissionId}")
	public ResponseEntity<Object> rejectApplication(@PathVariable Integer admissionId){
		
		return ResponseEntity.ok(this.admissionservice.reject(admissionId));
	}
	

}

