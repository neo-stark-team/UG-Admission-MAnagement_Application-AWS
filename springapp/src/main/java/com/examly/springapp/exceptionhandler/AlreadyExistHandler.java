package com.examly.springapp.exceptionhandler; 

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.ExceptionHandler; 
import org.springframework.web.bind.annotation.RestControllerAdvice; 

import com.examly.springapp.dtoclass.ResponseDto; 
import com.examly.springapp.exception.AlreadyExistException; 

@RestControllerAdvice 
public class AlreadyExistHandler { 
	@ExceptionHandler(value=AlreadyExistException.class)  
	public ResponseEntity<ResponseDto> handleUserAlreadyExist(AlreadyExistException userexist) { 
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body( 
				new ResponseDto(userexist.getMessage()) 
				); 
	} 

	

}  
  
