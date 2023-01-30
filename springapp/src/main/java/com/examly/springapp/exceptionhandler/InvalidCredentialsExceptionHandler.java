package com.examly.springapp.exceptionhandler; 

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.ExceptionHandler; 
import org.springframework.web.bind.annotation.RestControllerAdvice; 

import com.examly.springapp.dtoclass.ResponseDto; 
import com.examly.springapp.exception.InvalidCredentialsException; 

@RestControllerAdvice 
public class InvalidCredentialsExceptionHandler { 
	
	
	@ExceptionHandler(value=InvalidCredentialsException.class) 
	public ResponseEntity<ResponseDto> handleInvalidCreditional(InvalidCredentialsException userexist) { 
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body( 
				new ResponseDto(userexist.getMessage())  
				); 
	} 
	 

} 
 
