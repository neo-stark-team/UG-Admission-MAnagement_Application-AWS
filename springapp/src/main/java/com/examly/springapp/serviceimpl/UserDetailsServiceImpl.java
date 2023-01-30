package com.examly.springapp.serviceimpl; 
 
import org.slf4j.Logger; 
import org.slf4j.LoggerFactory; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.stereotype.Service; 
 
import com.examly.springapp.model.User; 
import com.examly.springapp.repository.UserRepository; 
 
 
@Service 
public class UserDetailsServiceImpl implements UserDetailsService { 
	 
	@Autowired 
	private UserRepository userrepo; 
 
	private Logger logger=LoggerFactory.getLogger(UserDetailsServiceImpl.class); 
	 
	@Override 
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException { 
		logger.info(username); 
		User user=this.userrepo.findByUsername(username); 
		if(user==null) { 
			logger.info("user not found"); 
			throw new UsernameNotFoundException("no user found"); 
		} 
		 
		return user; 
	} 
 
} 
