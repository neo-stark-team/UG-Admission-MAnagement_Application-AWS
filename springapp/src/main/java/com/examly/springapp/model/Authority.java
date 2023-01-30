package com.examly.springapp.model; 


import org.springframework.security.core.GrantedAuthority; 

public class Authority implements GrantedAuthority{ 
 
	private String authorityy; 
	public Authority(String authorityy) { 
		this.authorityy=authorityy; 
	} 
	
	@Override 
	public String getAuthority() { 
		return this.authorityy; 
	} 
	
	
} 
