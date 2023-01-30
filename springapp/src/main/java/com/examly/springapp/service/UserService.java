package com.examly.springapp.service;

import java.util.Set;

import com.examly.springapp.model.User;

public interface UserService {
	
	public User addUser(User user);
	
	public User updateUser(User user);
	
	public Set<User> getUsers();
	
	public User getUser(Long id);
	
	public void deleteUser(Long id);

}
