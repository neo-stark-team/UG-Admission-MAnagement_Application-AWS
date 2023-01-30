package com.examly.springapp.controller;

import java.util.Set;
 
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
import com.examly.springapp.enums.ExceptionMessage;
import com.examly.springapp.enums.Message; 
import com.examly.springapp.enums.RoleName;
import com.examly.springapp.exception.DatabaseTranscationException;
import com.examly.springapp.exception.AlreadyExistException;
import com.examly.springapp.model.Role;
import com.examly.springapp.model.User;
import com.examly.springapp.model.UserModelDto;
import com.examly.springapp.repository.RoleRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.serviceimpl.UserServiceImpl;

@RestController 
@CrossOrigin(origins="*")  
public class UserController {
	@Autowired
	private UserServiceImpl userservice;
	  
	  
 
	@Autowired
	private BCryptPasswordEncoder bCryptEncoder;
	 
	    
	 
	private Logger logger=LoggerFactory.getLogger(UserController.class); 
	 
	//creating user 
	@PostMapping("/user/signup") 
	@ResponseBody 
	public ResponseEntity<User> createUser(@RequestBody UserModelDto user1){ 
		 
		 User user=new User();
		 user.setEmail(user1.getEmail()); 
		 user.setMobileNumber(user1.getMobileNumber()); 
		 user.setPassword(this.bCryptEncoder.encode(user1.getPassword())); 
		 user.setUsername(user1.getUsername()); 
    
	     if((this.userservice.checkMailExist(user.getEmail()))||this.userservice.checkMobileNoExist(user.getMobileNumber())||Boolean.TRUE.equals(this.userservice.checkUsernameExist(user.getUsername()))) {
	           throw new AlreadyExistException(ExceptionMessage.USER_WITH_SAME_DATA_EXIST.toString()); 
	      
	      
	     } 
	     
	      
	      
	      
	     return ResponseEntity.ok(this.userservice.addUser(user)); 
		 
	}  

	//getting user by id 

	@GetMapping("/user/get/{userId}") 
	public ResponseEntity<User> getUserById(@PathVariable("userId")Long userId) { 
		User user=this.userservice.getUser(userId); 
		if(user!=null) { 
		return ResponseEntity.ok(user);} 
		else  
			throw new DatabaseTranscationException(Message.UNABLE_TO_FETCH_FROM_DATBASE.toString()); 
	
	} 
	 
	//get all users 
	@GetMapping("/user/all") 
	public ResponseEntity<Set<User>> getUsers( ){ 
		Set<User> users=this.userservice.getUsers();  
		if(!users.isEmpty()) { 
		return ResponseEntity.ok(users);} 
		else { 
			throw new DatabaseTranscationException(Message.DATABASE_ERROR.toString()); 
		} 
	} 

	//delete user by id 
	@DeleteMapping("/user/delete/{userId}")  
	public ResponseEntity<Object> delete(@PathVariable("userId")Long userId) throws UsernameNotFoundException { 
        String rolename=this.userservice.getRole(userId); 
        if("ADMIN".equals(rolename)) { 
        	throw new DatabaseTranscationException("ADMIN user not able to delete"); 
        } 
		this.userservice.deleteUser(userId); 
		String message; 
		if(this.userservice.getUser(userId)==null) { 
			 message=Message.DELETED_SUCCESSFULL+" USER-ID:-"+userId; 
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ResponseDto(message)); 
		
		} 
		  
		message="("+Message.DATABASE_ERROR+")"+Message.UNSUCCESSFULL.toString()+"USER-ID:-"+userId; 
				  
		throw new DatabaseTranscationException(message); 
 
		 
	} 
	 
	//update user 
	@PutMapping("/user/edit/{userId}") 
	@ResponseBody 
	public ResponseEntity<Object> editUser(@PathVariable("userId")Long userId,@RequestBody UserModelDto userdto){ 
		User user=new User(); 
		user.setId(userdto.getId()); 
		user.setEmail(userdto.getEmail()); 
		 user.setMobileNumber(userdto.getMobileNumber());
		  
		 user.setUsername(userdto.getUsername()); 
		 
		User user1=this.userservice.getUser(userId); 
 
		if(userdto.getPassword()==""){ 
            user.setPassword(user1.getPassword());   
		}   
		
		else{ 
			 
			 
			user.setPassword(this.bCryptEncoder.encode(userdto.getPassword()));   
		} 
		   
		 
		if((user.getEmail()).equals(user1.getEmail())&&user.getMobileNumber().equals(user1.getMobileNumber())&&user.getPassword().equals(user1.getPassword())&&user.getUsername().equals(user1.getPassword())) {
			
	
			   throw new DatabaseTranscationException(Message.SAME_DATA_EXIST.toString());} 
		else    
		{   
			this.userservice.updateUser(user);   
			User user2=this.userservice.getUser(user.getId());   
			if(user.getEmail().equals(user2.getEmail())&&user.getMobileNumber().equals(user2.getMobileNumber())&&user.getPassword().equals(user2.getPassword())&&user.getUsername().equals(user2.getPassword()))
				throw new DatabaseTranscationException(Message.DATABASE_ERROR.toString()+" "+Message.DATA_NOT_UPDATED);   
			   
	         return ResponseEntity.ok(this.userservice.updateUser(user));    
		}   
		  
	}   
	   
	@PutMapping("/user/changepassword/{userId}")   
	@ResponseBody   
	public ResponseEntity<Object> changepassword(@PathVariable("userId")Long userId,@RequestBody UserModelDto userdto){    
				User user=this.userservice.getUser(userId);  
				user.setPassword(this.bCryptEncoder.encode(userdto.getPassword()));  
				this.userservice.updateUser(user);  
				String message="Password Updated Successfully UserId:-"+user.getId();  
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ResponseDto(message));  
		 
	}   
	
	
	
	
} 


