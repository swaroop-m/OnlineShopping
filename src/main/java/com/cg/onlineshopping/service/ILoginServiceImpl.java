package com.cg.onlineshopping.service;


//@author Safiya Seher

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.cg.onlineshopping.entities.Customer;
import com.cg.onlineshopping.entities.User;
import com.cg.onlineshopping.exception.AlreadyExistsException;
import com.cg.onlineshopping.exception.NotAUserException;
import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.repository.ILoginRepository;

@Service
@CrossOrigin(origins = "http://localhost:3000")
public class ILoginServiceImpl implements ILoginService {

	@Autowired
	ILoginRepository userRepository;

	//adding a user
	@Override
	public User addUser(User user) {
		User u = userRepository.findByUserName(user.getUserName());
		if (u == null) {
			userRepository.save(user);
		} else {
			throw new AlreadyExistsException("User " + user.getUserId() + " already exists");
		}
		return user;
	}

	
	//removing a user
	@Override
	public User removeUser(User user) {
		
		User u = userRepository.findUserByUserNameAndPassword(user.getUserName(), user.getPassword());
		if (u == null) {
			throw new NotAUserException("User name : " + user.getUserName() + " or the User password : "
					+ user.getPassword() + " is invalid");
		}
		//User u = users.get();
		userRepository.delete(u);
		return user;
	}

	
	//validating a user
	@Override
	public User validateUser(User user) {
		User u = userRepository.findUserByUserNameAndPassword(user.getUserName(), user.getPassword());
		if (u == null) {
			throw new NotAUserException("User name : " + user.getUserName() + " or the User password : "
					+ user.getPassword() + " is invalid");
		}
		return user;
	}
	
	
	//signing out
	@Override
	public String signOut(User user)
	{
		User u = userRepository.findUserByUserNameAndPassword(user.getUserName(), user.getPassword());
		if (u == null) {
			throw new NotAUserException("User name : " + user.getUserName() + " or the User password : "
					+ user.getPassword() + " is invalid");
		}
		//User u = user.get();
		String message="User with username "+u.getUserName()+" signed out successfully";
		return message;
	}

	// EXTRA FUNCTIONS ADDED

	// To view a list of all users
	@Override
	public List<User> viewAllUsers() {
		// TODO Auto-generated method stub
		List<User> allUsers = userRepository.findAll();
		return allUsers;
	}

	
	//deleting user by userId
		@Override
		public User deleteUser(Integer id) {

			// Find the User to be deleted
			Optional<User> user = userRepository.findById(id);
			// If the user is present in database table then delete and return the user
			if(user.isPresent()) {
				User deletedUser = user.get();
				userRepository.delete(deletedUser);
				return deletedUser;
			}
			else {
				// If the user is not found in the database then throw an exception
				throw new NotFoundException("No User found with ID: " + id);
			}

		}
	
	//updating a user
	@Override
	public User updateUser(User user) {
		Optional<User> getUpdateUser = userRepository.findById(user.getUserId());
		User updateUser = null;
		if (getUpdateUser.isPresent()) {
			updateUser = getUpdateUser.get();
			if (user.getUserName() != null) {
				updateUser.setUserName(user.getUserName());
			}
			if (user.getRole() != null) {
				updateUser.setRole(user.getRole());
			}
			if (user.getPassword() != null) {
				updateUser.setPassword(user.getPassword());
			}
			userRepository.save(updateUser);
			return updateUser;
		} else {
			return null;
		}
	}
}