package com.cg.onlineshopping.test;

/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */


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

import com.cg.onlineshopping.entities.Address;

import com.cg.onlineshopping.entities.Customer;

import com.cg.onlineshopping.repository.IAddressRepository;

import com.cg.onlineshopping.repository.ICustomerRepository;

import com.cg.onlineshopping.service.ICustomerServiceImplementation;



@SpringBootTest
public class CustomerTest {

	Customer customer1;
	Customer customer2;
	Customer customer3;
	Address address;
	@Autowired
	ICustomerServiceImplementation customerService = new ICustomerServiceImplementation();
	@MockBean
	ICustomerRepository iCustomerRepository;
	@MockBean
	IAddressRepository iAddressRepository;

	//Giving values to use for the test cases
	@BeforeEach
	void setup() {
		address = new Address(1,"1A","Shantiniketan","Bangalore","Karnataka","India","560064");
		customer1 = new Customer(1,"Shrestha", "Chowdhury", "9045392939", address, "schowdhury1@gmail.com");
		customer2 = new Customer(2,"Prachika", "Mehta", "9046392939", address, "prachi@gmail.com");
		customer3 = new Customer(3,"Veerta", "Kapoor", "9047392939", address, "veerta24@gmail.com");
	}

	//add test case
	@Test
	void testAddCustomer() {
		when(iCustomerRepository.save(customer1)).thenReturn(customer1);
		Customer customer = customerService.addCustomer(customer1);
		Assertions.assertEquals(customer, customer1);
	}


	//update test case
	@Test
	void testUpdateCustomer() {

		customer3 = new Customer(2, "Prachika", "Mehta", "9047392939", address, "prachi@gmail.com");
		Optional<Customer> customer2 = Optional
				.of(new Customer(2, "Sona", "Mehta", "9047392939", address, "prachi@gmail.com"));
		when(iCustomerRepository.findById(2)).thenReturn(customer2);
		Customer customer1 = customerService.updateCustomer(customer3);
		Assertions.assertEquals(customer3, customer1);
	}

	//view all test case
	@Test
	void testViewAllCustomers() {
		List<Customer> allCustomersInDatabase = new ArrayList<Customer>();
		allCustomersInDatabase.add(customer1);
		allCustomersInDatabase.add(customer2);
		allCustomersInDatabase.add(customer3);
		when(iCustomerRepository.findAll()).thenReturn(allCustomersInDatabase);
		List<Customer> allCustomersFound = customerService.viewAllCustomers();
		Assertions.assertEquals(allCustomersFound, allCustomersInDatabase);

	}

	//view test case
	@Test
	void testViewCustomer() {
		Optional<Customer> customer = Optional.of(customer1);
		int id = 2;
		when(iCustomerRepository.findById(id)).thenReturn(customer);
		Customer c = customerService.viewCustomer(2);
		Assertions.assertEquals(customer1, c);

	}


	@Test
	void testRemoveCustomer() {
		Optional<Customer> customer = Optional.of(customer1);
		int id = 2;
		when(iCustomerRepository.findById(id)).thenReturn(customer);
		Customer c = customerService.removeCustomer(id);
		Assertions.assertEquals(customer1, c);

	}	
	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */

}

