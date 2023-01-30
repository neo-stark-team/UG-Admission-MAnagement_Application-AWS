package com.examly.springapp.exceptionhandler; 

import org.springframework.http.HttpStatus; 
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.ExceptionHandler; 
import org.springframework.web.bind.annotation.RestControllerAdvice; 

import com.examly.springapp.dtoclass.ResponseDto; 
import com.examly.springapp.exception.DatabaseTranscationException; 

@RestControllerAdvice 
public class DatabaseTranscationExceptionHandler { 
	@ExceptionHandler(value=DatabaseTranscationException.class) 
	public ResponseEntity<ResponseDto> handleDatabaseException(DatabaseTranscationException userexist) { 
		return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body( 
				new ResponseDto(userexist.getMessage()) 
				); 
	} 
}  
 
