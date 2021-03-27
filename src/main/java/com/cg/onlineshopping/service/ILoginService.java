package com.cg.onlineshopping.service;

//@author Safiya Seher

import java.util.List;

import com.cg.onlineshopping.entities.User;

public interface ILoginService
{
	public User addUser(User user); 		//method to add a user
	public User removeUser(User user);			//method to remove a user
	public User validateUser(User user);	//method to validate a user
	public String signOut(User user);		//method to sign out
	
	
	//Extra functions added
	public List<User> viewAllUsers();		//method to view all users
	public User updateUser(User user);		//method to update a user
}