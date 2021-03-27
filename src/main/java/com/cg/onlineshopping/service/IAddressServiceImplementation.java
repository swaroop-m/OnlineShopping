/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 */


package com.cg.onlineshopping.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Address;

import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.repository.IAddressRepository;

@Service
public class IAddressServiceImplementation implements IAddressService {

	// To perform CRUD operations on database tables
	@Autowired
	private IAddressRepository addressRepository;

	//Adding the Address
	@Override
	public Address addAddress(Address add) {
		// Create Operation to save a product to database and returning the saved address.
		return addressRepository.save(add);
	}

	// Update Address
	@Override
	public Address updateAddress(Address add) {
		// find the address in the database which is to be updated 
		Optional<Address> existing = addressRepository.findById(add.getAddressId());
		// If no such address exist, throw not found exception
		if (existing.isEmpty()) {
			throw new NotFoundException("This address does not exist!");
		}
		// If address exist then check if fields of updating product is not empty
		// then update that address.
		else {

			Address existingAddress = existing.get();
			if (add.getStreetNo() != null) {
				existingAddress.setStreetNo(add.getStreetNo());
			}
			if (add.getBuildingName() != null) {
				existingAddress.setBuildingName(add.getBuildingName());
			}
			if (add.getCity() != null) {
				existingAddress.setCity(add.getCity());
			}
			if (add.getState() != null) {
				existingAddress.setState(add.getState());
			}
			if (add.getCountry() != null) {
				existingAddress.setCountry(add.getCountry());
			}
			if (add.getPincode() != null) {
				existingAddress.setPincode(add.getPincode());
			}
			// perform update operation to the database table
			addressRepository.save(existingAddress);
			// return the address which is updated
			return existingAddress;			
		}		
	}

	// Remove Address
	@Override
	public Address removeAddress(Integer id) {
		// Find the address which has to be removed
		Optional<Address> address = addressRepository.findById(id);
		// If the address is present in database table then delete and return the address
		if (address.isPresent()) {
			Address deletedAddress = address.get();
			addressRepository.delete(deletedAddress);
			return deletedAddress;
		}
		// If the address is not found in the database then throw an exception
		else {
			throw new NotFoundException("No Address found with ID: " + id);
		}

	}

	// View all Address
	@Override
	public List<Address> viewAllAddress() {
		// Retrieval Operation to get all address details from database.
		List<Address> allAddress = addressRepository.findAll();
		// Check if no address are present in database.
		if (allAddress.isEmpty()) {
			// If address table is empty, throw an exception.
			throw new NotFoundException("No Address found!");
		}
		// If address exists, then return all the address present in the database.
		else {

			return allAddress;
		}		
	}


	// View address by id
	@Override
	public Address viewAddress(int id) {
		// Fetching address details from database and checking if it is present or not
		// If the address is present then return it
		if (addressRepository.findById(id).isPresent()) {
			Address address = addressRepository.findById(id).get();
			return address;
		}
		// If address is not found throw an exception
		else {
			throw new NotFoundException("No Address found with ID: " + id);	
		}
	}
	/*
	 * @Author: Shrestha Chowdhury
	 * Code ends here
	 */

}
