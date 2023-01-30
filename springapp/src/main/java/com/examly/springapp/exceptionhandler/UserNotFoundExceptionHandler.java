package com.examly.springapp.exceptionhandler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.examly.springapp.dtoclass.ResponseDto;
import com.examly.springapp.exception.UserNotFoundException;

@RestControllerAdvice
public class UserNotFoundExceptionHandler {
	
	@ExceptionHandler(value=UserNotFoundException.class)
	public ResponseEntity<ResponseDto> handleInvalidCreditional(UserNotFoundException userexist) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
				new ResponseDto(userexist.getMessage())
				);
	}

}
