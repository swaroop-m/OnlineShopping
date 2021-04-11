package com.cg.onlineshopping.controller;

//@author Safiya Seher

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.onlineshopping.entities.Customer;
import com.cg.onlineshopping.entities.User;
import com.cg.onlineshopping.service.ILoginService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/api")
@Api(value = "LoginController", tags = { "LoginAPI" })
@ApiModel(description = "You can find all the Login related APIs here ")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginRestController 
{
	private static final Logger log =LogManager.getLogger(LoginRestController.class);
	
	@Autowired
	ILoginService loginService;
	
	
	//adding a user
	@ApiOperation(value = "Homepage URL to add user")
	@PostMapping("/addUser") 
	public ResponseEntity<User> addUser(@RequestBody User u) 
	{
		User user = loginService.addUser(u); 
		log.info("New User added into the Database");
		return new ResponseEntity<>(user,HttpStatus.CREATED);
	}

	
	//removing a user
	@ApiOperation(value = "Delete a User from database using Id")
	@DeleteMapping("/removeUser")
	public ResponseEntity<String> removeUser(@RequestBody User u) 
	{
		loginService.removeUser(u); 
		log.info("User deleted from Database");
		return new ResponseEntity<>("Successfuly deleted", HttpStatus.OK);
	}

	
	//validating a user
	@ApiOperation(value = "Validating a User")
	@GetMapping("/validateUser")
	public ResponseEntity<User> validateUser(@RequestBody User user){
		User u = loginService.validateUser(user); 
		log.info("Validating user");
		return new ResponseEntity<>(u,HttpStatus.OK);
	}
	
	
	//signing out
	@ApiOperation(value = "SignOut URL")
	@GetMapping("/signOut")
	public ResponseEntity<String> signOut(@RequestBody User u) 
	{
		loginService.signOut(u);
		log.info("User signed out successfully");
		return new ResponseEntity<>("Signed Out", HttpStatus.OK);
	}
	
	
	//Extra functions added
	
	
	//viewing all users in database
	@ApiOperation(value = "Viewing all users in database")
	@GetMapping("/viewAllUsers")			//working
	@ResponseStatus(value = HttpStatus.OK)
	public List<User> viewAllUsers() 
	{
		List<User> users = loginService.viewAllUsers();
		return users;
	}
	
	
	//updating a user in databse
	@ApiOperation(value = "Updating user in database")
	@PutMapping("/updateUser")          //working
	@ResponseStatus(value = HttpStatus.OK)
	public User updateUser(@RequestBody User user) {
		User updatedUser = loginService.updateUser(user);
		return updatedUser;
	}
	
	//Remove Customer	
		@ApiOperation(value = "Delete a User using customer ID")
		@DeleteMapping("/deleteUser/{id}") // working
		public ResponseEntity<User> deleteUser(@PathVariable("id") int id) {
			User deletedUser = loginService.deleteUser(id);
			return new ResponseEntity<User>(deletedUser,HttpStatus.OK);
		}

}
