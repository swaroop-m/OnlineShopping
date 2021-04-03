package com.cg.onlineshopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.onlineshopping.entities.CustomerCare;
import com.cg.onlineshopping.service.ICustomerCareService;

@RestController
@RequestMapping(value = "/api")
public class CustomerCareRestController {
	
	@Autowired
	ICustomerCareService iCusromerCareService;
	
	@GetMapping("/home") //for testing the controller
	public String CustomerCarePage() {
	return " Customer Care ";
	}
	
	@PostMapping("/addcomplaints")
	public ResponseEntity<CustomerCare> addComplaints(@RequestBody CustomerCare customerCare) {
		CustomerCare addComplaint= iCusromerCareService.addComplaints(customerCare);
		return new ResponseEntity<CustomerCare>(addComplaint,HttpStatus.CREATED);
		
	}
	

}
