package com.examly.springapp.exception; 

//create a class
//names as AlraedyExistException

public class AlreadyExistException extends RuntimeException { 
	private static final long serialVersionUID = 1L; 
	public AlreadyExistException(String message) { 
		super(message); 
	} 

} 
