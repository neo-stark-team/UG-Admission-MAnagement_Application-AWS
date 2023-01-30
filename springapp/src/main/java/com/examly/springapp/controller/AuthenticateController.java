package com.examly.springapp.controller; 
 
import java.security.Principal; 
 
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.ResponseEntity; 
import org.springframework.security.authentication.AuthenticationManager; 
import org.springframework.security.authentication.BadCredentialsException; 
 
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; 
 
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.web.bind.annotation.CrossOrigin; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import org.springframework.web.bind.annotation.RequestParam; 
import org.springframework.web.bind.annotation.RestController; 
 
import com.examly.springapp.config.JwtUtil; 
import com.examly.springapp.dtoclass.ResponseDto; 
import com.examly.springapp.dtoclass.RoleResponseDto; 
import com.examly.springapp.model.JwtRequest; 
import com.examly.springapp.model.JwtResponse; 
 
import com.examly.springapp.model.User; 
 
import com.examly.springapp.repository.UserRepository; 
import com.examly.springapp.serviceimpl.UserServiceImpl; 
import com.examly.springapp.serviceimpl.UserDetailsServiceImpl; 
import com.examly.springapp.exception.InvalidCredentialsException; 
 
import com.examly.springapp.exception.UserNotFoundException; 
import com.examly.springapp.enums.ExceptionMessage; 
import com.examly.springapp.enums.Message; 
import com.examly.springapp.enums.RoleName; 
 
@RestController 
@CrossOrigin(origins="http://35.170.243.30") 
public class AuthenticateController { 
	 
	@Autowired 
	private AuthenticationManager authenticationManger; 
	 
	@Autowired 
	private UserDetailsServiceImpl userdetailserviceimpl; 
	@Autowired 
	private UserServiceImpl userservice; 
	 
	@Autowired  
	private UserRepository userrepository; 
	@Autowired 
	private JwtUtil jwtutils; 
 
	 
	@PostMapping("/generate-token") 
	public ResponseEntity<Object> generateToken(@RequestBody JwtRequest jwtRequest){ 
		 
		try { 
			//setting up username by using mailId 
			jwtRequest.setUsername(userrepository.findUsername(jwtRequest.getEmail())); 
			 
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword()); 
			 
		} 
		catch(UsernameNotFoundException e) { 
			 
			throw new UserNotFoundException("user not found"); 
		} 
		 
		UserDetails userdetails=this.userdetailserviceimpl.loadUserByUsername(jwtRequest.getUsername()); 
		 
		String token=this.jwtutils.generateToken(userdetails); 
		 
		return ResponseEntity.ok(new JwtResponse(token)); 
		 
	} 
	 
  private void authenticate(String username,String password) { 
	 
	try { 
		 
	   authenticationManger.authenticate(new UsernamePasswordAuthenticationToken(username, password)); 
		 
	} 
	catch(BadCredentialsException e) { 
		throw new InvalidCredentialsException(ExceptionMessage.INVALID_CREDENTIALS.toString()); 
	} 
   } 
   
 
     @GetMapping("/current-user") 
	 public User getCurrentUser(Principal principal) { 
		return ((User) this.userdetailserviceimpl.loadUserByUsername(principal.getName())); 
	} 
 
   
  @GetMapping("/check-email") 
  public ResponseEntity<Object> getEmail(@RequestParam("mail")String mail){ 
	   
	  if(Boolean.TRUE.equals(this.userservice.checkMailExist(mail))) 
	  { 
		  
		  return ResponseEntity.ok(new  ResponseDto(Message.MAIL_ID_EXIST.toString())); 
	  } 
	   
	  return ResponseEntity.ok(Message.PROCEED); 
  } 
   
   
   
  @GetMapping("/check-username") 
  public ResponseEntity<Object> getUsername(@RequestParam("username")String username){ 
	   
	  if(Boolean.TRUE.equals(this.userservice.checkUsernameExist(username))) 
	  { 
		  return ResponseEntity.ok(new  ResponseDto(Message.USERNAME_EXIST.toString())); 
	  } 
	   return ResponseEntity.ok(Message.PROCEED); 
  } 
   
   
  @GetMapping("/check-mobileno") 
  public ResponseEntity<Object> getMobile(@RequestParam("mobileno")String mobileno){ 
	   
	  if(Boolean.TRUE.equals(this.userservice.checkMobileNoExist(mobileno))) 
	  { 
		  return ResponseEntity.ok(new  ResponseDto(Message.MOBILENUMBER_EXIST.toString())); 
	  } 
	  return ResponseEntity.ok(Message.PROCEED); 
  } 
   
   
  @GetMapping("/AdminRoleName") 
  public ResponseEntity<RoleResponseDto> sendAdminRoleName() { 
	  return ResponseEntity.ok().body(new RoleResponseDto(RoleName.ADMIN.toString())); 
  } 
  @GetMapping("/UserRoleName") 
  public ResponseEntity<RoleResponseDto> sendUserRoleName() { 
	  return ResponseEntity.ok().body(new RoleResponseDto(RoleName.USER.toString())); 
  } 
 } 
