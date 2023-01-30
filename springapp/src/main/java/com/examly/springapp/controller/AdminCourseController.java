//imports


package com.examly.springapp.controller;


import java.util.List;


import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;


import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.CrossOrigin;


import org.springframework.web.bind.annotation.DeleteMapping;


import org.springframework.web.bind.annotation.GetMapping;


import org.springframework.web.bind.annotation.PathVariable;


import org.springframework.web.bind.annotation.PostMapping;


import org.springframework.web.bind.annotation.PutMapping;


import org.springframework.web.bind.annotation.RequestBody;


import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.bind.annotation.RestController;


import javax.validation.Valid;


import com.examly.springapp.dtoclass.ResponseDto;


import com.examly.springapp.model.CourseModel;


import com.examly.springapp.model.InstituteModel;


import com.examly.springapp.serviceimpl.CourseService;


@RestController

@CrossOrigin(origins="*")

public class AdminCourseController {
	

	@Autowired

	private CourseService courseservice;
	
	//get courses
	
	
	@GetMapping("/getcourses")
	
	public ResponseEntity<List<CourseModel>> viewInstitute() {
	
		return ResponseEntity.ok(courseservice.findAll());
	
	}
	
	//add courses
	
	@PostMapping("/addcourse")
	
	public ResponseEntity<CourseModel> addCourse(@Valid @RequestBody CourseModel course) {
	
		return ResponseEntity.ok(courseservice.save(course));
	
	}
	
	//update courses
	
	@PutMapping("/updatecourse")
	
	public ResponseEntity<CourseModel> updateCourse(@Valid @RequestBody CourseModel course) {
	
		return ResponseEntity.ok(courseservice.save(course));
	
	}
	
	
	@GetMapping("/getcourse/{courseid}")
	
	public ResponseEntity<CourseModel> getCourse(@PathVariable("courseid") int courseid) {
	
		return ResponseEntity.ok(courseservice.getCourse(courseid));
	
	}
	
	
	//get courses using instituteId
	
	@GetMapping("/getcourses/instituteid/{instituteid}")
	
	public ResponseEntity<Set<CourseModel>> getCourses(@PathVariable("instituteid") int instituteid) {
	
		Set<CourseModel> course=courseservice.findCourses(instituteid);
		 
		
		return ResponseEntity.ok(course);
		
	}
	
	 
	//delete courses
	
	
	@DeleteMapping("/deletecourse/{courseId}")
	
	public ResponseEntity<Object> deleteCourse(@PathVariable("courseId") int courseId) {
		
	
		if(Boolean.TRUE.equals(courseservice.delete(courseId))) {
		
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseDto("course deleted successfully CourseId: "+courseId));}
		
		
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ResponseDto("SERVER ERROR"));
		
		
	
	}




}
