package com.cg.onlineshopping.test;

//@author Safiya Seher

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.onlineshopping.entities.Customer;
import com.cg.onlineshopping.entities.User;
import com.cg.onlineshopping.repository.ICustomerRepository;
import com.cg.onlineshopping.repository.ILoginRepository;
import com.cg.onlineshopping.service.ILoginServiceImpl;


@SpringBootTest
public class UserTest {

	User user1;
	User user2;
	User user3;
	Customer customer;

	@Autowired
	ILoginServiceImpl loginService = new ILoginServiceImpl();
	@MockBean
	ILoginRepository loginRepository;
	@MockBean
	ICustomerRepository customerRepository;

	@BeforeEach
	void setup() {
		customer = new Customer(1,"Safiya", "Seher", "9110652228", null, "seher.safia@gmail.com");
		user1 = new User(1,"SafiyaSeher01","seher1234","admin",customer);
		user2 = new User(2,"SafiyaSeher02","seher1234","customer",customer);
		user3 = new User(3,"SafiyaSeher03","seher1234","customer",customer);
	}

	@Test
	void testAddUser() {
		when(loginRepository.save(user1)).thenReturn(user1);
		User user = loginService.addUser(user1);
		Assertions.assertEquals(user, user1);
	}
	
	
	@Test
	void testRemoveUser() {
		Optional<User> user = Optional.of(user1);
		when(loginRepository.findUserByUserNameAndPassword(user1.getUserName(),user1.getPassword())).thenReturn(user1);
		User u = loginService.removeUser(user1);
		Assertions.assertEquals(user1, u);

	}	
	
	@Test
	public void testvalidateUser() {
		when(loginRepository.findUserByUserNameAndPassword(user1.getUserName(),user1.getPassword())).thenReturn(user1);
		User u=loginService.validateUser(user1);
		Assertions.assertEquals(u, user1);
		
	}
	
	//EXTRA FUNCTIONS ADDED
	
	@Test
	void testViewAllUsers() {
		List<User> allUsersInDatabase = new ArrayList<User>();
		allUsersInDatabase.add(user1);
		allUsersInDatabase.add(user2);
		allUsersInDatabase.add(user3);
		when(loginRepository.findAll()).thenReturn(allUsersInDatabase);
		List<User> allUsersFound = loginService.viewAllUsers();
		Assertions.assertEquals(allUsersFound, allUsersInDatabase);

	}
	
	@Test
	void testUpdateUser() {

		user3 = new User(2,"UpdatedSeher","seher0987","customer",customer);
		Optional<User> user2 = Optional
				.of(new User(2, "ZoyaFalak99","seher0987","customer",customer));
		when(loginRepository.findById(2)).thenReturn(user2);
		User user1 = loginService.updateUser(user3);
		Assertions.assertEquals(user3, user1);
	}

	
	
}
	

