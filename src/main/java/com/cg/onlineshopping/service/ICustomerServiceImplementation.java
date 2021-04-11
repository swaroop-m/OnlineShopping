package com.cg.onlineshopping.service;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;





import com.cg.onlineshopping.entities.Customer;
import com.cg.onlineshopping.exception.AlreadyExistsException;
import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.exception.ValidationException;
import com.cg.onlineshopping.repository.ICustomerRepository;

@Service
public class ICustomerServiceImplementation implements ICustomerService{
	// To perform CRUD operations on database tables
	@Autowired
	private ICustomerRepository customerRepository;

	//Adding the customer
	@Override
	public Customer addCustomer(Customer cust) throws ValidationException {
		//Pattern to check the correct format of the email id		
		final String emailPattern = "^[A-Za-z0-9+_.-]+@(.+)$"; 
		//Pattern to check the correct format of the mobile number
		final String mobilePattern = "(0/91)?[7-9][0-9]{9}"; //numbers starting with 7,8,9 accepted, 10 digits only.

		String email = cust.getEmail();
		if (email.matches(emailPattern)) {
			//Checking if the email already exists or not
			Customer existingemail = customerRepository.findByEmail(cust.getEmail());
			if(existingemail != null) {
				//throw an exception if email already exists
				throw new AlreadyExistsException("EmailId Already Exists!");
			}
		}

		else {
			//throw an exception if the email doesn't match the pattern
			throw new ValidationException("Invalid Email");
		}

		String mobileNo = cust.getMobileNumber();
		if (mobileNo.matches(mobilePattern)) {
			//fetching the mobile number and checking if it already exists or not
			Customer existingmobileno = customerRepository.findByMobileNumber(cust.getMobileNumber());
			if(existingmobileno != null) {
				//throw an exception if the mobile number already exists
				throw new AlreadyExistsException("Mobile Number Already Exists!");
			}
		}

		else {
			//throw an exception if the mobile number doesn't match the pattern
			throw new ValidationException("Invalid Mobile Number");
		}

		//return the saved customer
		return customerRepository.save(cust);
	}

	//Update Customer
	@Override
	public Customer updateCustomer(Customer cust) {
		// find the customer in the database which is to be updated 
		Optional<Customer> existing = customerRepository.findById(cust.getCustomerId());
		// If no such customer exist, throw not found exception 
		if (existing.isEmpty()) {
			throw new NotFoundException("Customer does not exist");
		} 
		// If customer exist then check if fields of updating customer is not empty
		// then update that customer.
		else {

			Customer existingCustomer = existing.get();
			if (cust.getFirstName() != null) {
				existingCustomer.setFirstName(cust.getFirstName());
			}
			if (cust.getLastName() != null) {
				existingCustomer.setLastName(cust.getLastName());
			}
			if (cust.getMobileNumber() != null) {
				existingCustomer.setMobileNumber(cust.getMobileNumber());
			}
			if (cust.getAddress() != null) {
				existingCustomer.setAddress(cust.getAddress());
			}
			if (cust.getEmail() != null) {
				existingCustomer.setEmail(cust.getEmail());
			}
			// perform update operation to the database table
			customerRepository.save(existingCustomer);
			// return the customer which is updated
			return existingCustomer;
		}	
	}

	//Remove Customer
	@Override
	public Customer removeCustomer(Integer id) {

		// Find the customer which has to be removed
		Optional<Customer> customer = customerRepository.findById(id);
		// If the customer is present in database table then delete and return the customer
		if(customer.isPresent()) {
			Customer deletedCustomer = customer.get();
			customerRepository.delete(deletedCustomer);
			return deletedCustomer;
		}
		else {
			// If the customer is not found in the database then throw an exception
			throw new NotFoundException("No Customer found with ID: " + id);
		}

	}

	//View Customer using id
	@Override
	public Customer viewCustomer(int id) {

		// Fetching customer details from database and checking if it is present or not
		// If the customer is present then return it
		if (customerRepository.findById(id).isPresent()) {
			Customer customer = customerRepository.findById(id).get();
			return customer;
		}
		// If customer is not found throw an exception
		else {
			throw new NotFoundException("No Customer found with ID: " + id);
		}	
	}

	//View all the customers
	@Override
	public List<Customer> viewAllCustomers() {

		// Retrieval Operation to get all customer details from database.
		List<Customer> allCustomers = customerRepository.findAll(Sort.by(Direction.DESC,"customerId"));
		// Check if no customer are present in database.
		if (allCustomers.isEmpty()) {
			// If customer table is empty, throw an exception.
			throw new NotFoundException("No Customers found!");
		} 
		// If customer exists, then return all the customers present in the database.
		else {

			return allCustomers;
		}

	}

	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */




}
