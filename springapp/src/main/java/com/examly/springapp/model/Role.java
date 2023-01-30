package com.examly.springapp.model; 

import java.io.Serializable ; 
import java.util.HashSet; 
import java.util.Set; 

import javax.persistence.CascadeType; 
import javax.persistence.Entity; 
import javax.persistence.FetchType; 

import javax.persistence.Id; 
import javax.persistence.OneToMany; 

import com.fasterxml.jackson.annotation.JsonIgnore; 
 
@Entity 
public class Role implements Serializable{
	@Id 
	private Integer roleId;  
	private String roleName; 
	 
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY,mappedBy="role") 
	@JsonIgnore 
	private Set<User> users=new HashSet<>(); 
	
	public void setUserRoles(Set<User> userRoles) { 
		this.users = userRoles; 
	} 
	public Integer getRoleId() { 
		return roleId; 
	} 
	public void setRoleId(Integer roleId) { 
		this.roleId = roleId;  
	}
	public String getRoleName() { 
		return roleName;
	} 
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	public Role() {
		 
	}
	public Role(String roleName) { 
		super(); 
		this.roleName = roleName; 
	}	 
} 
