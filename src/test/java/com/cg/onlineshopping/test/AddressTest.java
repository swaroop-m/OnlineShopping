package com.cg.onlineshopping.test;
/*
 * Author:Shrestha Chowdhury and Aishwarya A S
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

import com.cg.onlineshopping.repository.IAddressRepository;
import com.cg.onlineshopping.service.IAddressServiceImplementation;


@SpringBootTest
public class AddressTest {
	Address address;
	Address address1;
	Address address2;
	Address address3;


	@Autowired
	IAddressServiceImplementation addressService= new IAddressServiceImplementation();

	@MockBean
	IAddressRepository addressRepository;

	//Giving values to use for the test cases
	@BeforeEach
	void setUp() {
		address1=new Address(2,"12", "Ram Villas", "Bangalore", "Karnataka", "India", "560051");
		address2=new Address(3,"12", "SkyView Apartments", "Shimla", "Himachal Pradesh", "India", "570061");
		address3=new Address(4,"12", "Mohini Building", "Pune", "Maharastra", "India", "550041");
	}

	//add test case
	@Test
	public void testAddAddress(){
		when(addressRepository.save(address1)).thenReturn(address1);
		Address address = addressService.addAddress(address1);
		Assertions.assertEquals(address, address1);


	}

	//update test case
	@Test
	public void testUpdateAddress() {
		address3 = new Address(4,"12", "Sheldon High", "Houston", "Texas", "USA", "77001");
		Optional<Address> address2 = Optional
				.of(new Address(4,"12", "Sheldon High", "Houston", "Texas", "USA", "77001"));
		when(addressRepository.findById(4)).thenReturn(address2);
		Address address = addressService.updateAddress(address3);
		Assertions.assertEquals(address3, address);
	}

	//delete test case
	@Test
	public void testRemoveAddress() {
		Optional<Address> address = Optional.of(address1);
		int id = 3;
		when(addressRepository.findById(id)).thenReturn(address);
		Address a = addressService.removeAddress(id);
		Assertions.assertEquals(address1, a);
	}

	//view all test case
	@Test
	public void testViewAllAddress() {
		List<Address> allAddress = new ArrayList<Address>();
		allAddress.add(address1);
		allAddress.add(address2);
		allAddress.add(address3);
		when(addressRepository.findAll()).thenReturn(allAddress);
		List<Address> addressFound = addressService.viewAllAddress();
		Assertions.assertEquals(addressFound, allAddress);
	}

	//view test case
	@Test
	public void testViewAddress() {
		Optional<Address> address = Optional.of(address1);
		int id = 3;
		when(addressRepository.findById(id)).thenReturn(address);
		Address a = addressService.viewAddress(3);
		Assertions.assertEquals(address1, a);	
	}	
}
/*
 * Author:Shrestha Chowdhury and Aishwarya A S
 * Code starts here
 */

