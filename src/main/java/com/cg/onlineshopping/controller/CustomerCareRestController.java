package com.cg.onlineshopping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.onlineshopping.entities.CustomerCare;
import com.cg.onlineshopping.service.ICustomerCareService;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin
public class CustomerCareRestController {
	
	@Autowired
	ICustomerCareService iCusromerCareService;
	
//	@GetMapping("/home") //for testing the controller
//	public String CustomerCarePage() {
//	return " Customer Care ";
//	}
	
	@PostMapping("/addcomplaints")
	public ResponseEntity<CustomerCare> addComplaints(@RequestBody CustomerCare customerCare) {
		CustomerCare addComplaint= iCusromerCareService.addComplaints(customerCare);
		return new ResponseEntity<CustomerCare>(addComplaint,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deletecomplaints")
	public ResponseEntity<CustomerCare> deleteAllComplaints(CustomerCare customerCare) {
		CustomerCare deleteAllComplaint= iCusromerCareService.deleteAllComplaints(customerCare);
		return new ResponseEntity<CustomerCare>(deleteAllComplaint,HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/viewallcomplaints")
	public ResponseEntity<List<CustomerCare>> viewAllComplaints() {
		List<CustomerCare> viewAllComplaints= iCusromerCareService.viewAllComplaints();
		return new ResponseEntity<List<CustomerCare>>(viewAllComplaints,HttpStatus.ACCEPTED);
	}
	
}
