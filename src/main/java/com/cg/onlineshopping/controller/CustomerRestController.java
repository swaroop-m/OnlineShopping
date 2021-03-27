package com.cg.onlineshopping.controller;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cg.onlineshopping.entities.Customer;
import com.cg.onlineshopping.service.ICustomerService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;



@RestController
@RequestMapping("/api")
@Api(value = "Customer Controller", tags = { "CustomerAPI" })
@ApiModel(description = "You can find all the customer related APIs here ")
public class CustomerRestController {

	private static final Logger log =LogManager.getLogger(CustomerRestController.class);

	@Autowired
	private ICustomerService iCustomerService;

	//To view all the customers		
	@ApiOperation(value = "View All Customers Present in the Database")
	@GetMapping("/viewallcustomers") // working
	public ResponseEntity<List<Customer>> showAllCustomers() {
		List<Customer> customers = iCustomerService.viewAllCustomers();
		log.info("Viewed All Customers Present in the Database");
		return new ResponseEntity<List<Customer>>(customers,HttpStatus.OK);
	}


	//Adding Customer
	@ApiOperation(value = "Add a customer into the Database")
	@PostMapping("/addcustomer") // working
	public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer) {
		Customer savedCustomer = iCustomerService.addCustomer(customer);
		log.info("New customer added into the Database");
		return new ResponseEntity<Customer>(savedCustomer,HttpStatus.CREATED);
	}




	//Updating Customer
	@ApiOperation(value = "Update a Customer which is already present")
	@PutMapping("/updatecustomer") // working 
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
		Customer updatedCustomer = iCustomerService.updateCustomer(customer);
		log.info("Existing customer updated in the Database");
		return new ResponseEntity<Customer>(updatedCustomer,HttpStatus.OK);
	}



	//Remove Customer	
	@ApiOperation(value = "Delete a Customer using customer ID")
	@DeleteMapping("/deletecustomer/{id}") // working
	public ResponseEntity<Customer> deleteCustomer(@PathVariable("id") int id) {
		log.info("Controller Triggered");
		Customer deletedCustomer = iCustomerService.removeCustomer(id);
		return new ResponseEntity<Customer>(deletedCustomer,HttpStatus.OK);
	}



	//View Customer by id
	@ApiOperation(value = "View a Customer using Customer ID")
	@GetMapping("/viewcustomer/{id}") // working
	public ResponseEntity<Customer> showCustomerById(@PathVariable(value = "id") int id) {
		log.info("Controller Triggered");
		Customer customer = iCustomerService.viewCustomer(id);
		return new ResponseEntity<Customer>(customer,HttpStatus.OK);
	}


	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */
}
