package com.examly.springapp.controller;  
 
import java.io.IOException;  
import java.nio.file.Files;  
import java.nio.file.Path;  
import java.nio.file.Paths;  
import java.util.List;  

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.core.io.ByteArrayResource;  
import org.springframework.core.io.ClassPathResource;  
import org.springframework.http.HttpStatus;  
import org.springframework.http.MediaType;  
import org.springframework.http.ResponseEntity;  
import org.springframework.web.bind.annotation.CrossOrigin;  
import org.springframework.web.bind.annotation.DeleteMapping;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PathVariable;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.PutMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RequestParam;  
import org.springframework.web.bind.annotation.RestController;  
import org.springframework.web.multipart.MultipartFile;  
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;  

import com.examly.springapp.dtoclass.ResponseDto;  
import com.examly.springapp.enums.Message;  
import javax.validation.Valid;  
import com.examly.springapp.model.InstituteModel;  
import com.examly.springapp.repository.RatingRepository;   
import com.examly.springapp.serviceimpl.InstituteService;  
import com.examly.springapp.serviceimpl.UserServiceImpl;   

import java.util.Optional;   



@RestController 
@CrossOrigin(origins = "http://35.170.243.30")   
public class AdminController {      
	
	
	
	
	@Autowired  
	private InstituteService instituteService;             
	
	
	@GetMapping("/admin/viewInstitutes")   
	public ResponseEntity<List<InstituteModel>> viewInstitute() {  
		return ResponseEntity.ok(instituteService.findall());  
	} 
	
	
	@GetMapping("/getInstitute/{instituteId}")   
	public ResponseEntity<InstituteModel> getInstitute(@PathVariable("instituteId") Integer instituteId) {   
		return ResponseEntity.ok(instituteService.getInstitute(instituteId));  
	}     
	
	
	@PostMapping("/admin/addInstitute")       
	public ResponseEntity<Object> addInstitute(@Valid @RequestBody InstituteModel institute) {   
		if(instituteService.findById(institute.getInstituteId()) ||instituteService.findByInstituteName(institute.getInstituteName()) || instituteService.findByEmail(institute.getEmail()) || instituteService.findByAddress(institute.getInstituteAddress())|| instituteService.findByMobile(institute.getMobile())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseDto("Institute data already Exist"));   
		}   
		
		return ResponseEntity.ok(instituteService.save(institute));   
	}   
	
	
	@DeleteMapping("/deleteInstitute/{instituteId}")   
	public ResponseEntity<Object> deleteInstitute(@PathVariable("instituteId") int instituteId) {   
		  
		if(Boolean.TRUE.equals(instituteService.delete(instituteId))) {   
			  
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto("institute deleted successfully InstituteId: "+instituteId));}   
		  
		
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ResponseDto("SERVER ERROR"));   
		
		  
	}    
	
 
	@PutMapping("/admin/editInstitute")    
	public ResponseEntity<Object> editInstitute(@RequestParam("instituteId") int instituteId,@Valid @RequestBody InstituteModel institute) {   
		   
			  if(instituteService.findById(instituteId))   
			  { 
				  
				  return ResponseEntity.ok(instituteService.save(institute));   
			  }   
		
			  
			  else {   
			  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseDto("institute not found"));   
		  }   
	}   
	
	
	 @GetMapping("/checkid")   
	  public ResponseEntity<Object> getMobile(@RequestParam("instituteId")Integer instituteId){    
		       
		  if(instituteService.findById(instituteId))   
		  {   
			  return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new  ResponseDto("Id exist"));  
		  }   
		     
		  else {   
			  
		  return ResponseEntity.ok(Message.PROCEED);   
	  }}   
	 
	
	    
	
	

}  
