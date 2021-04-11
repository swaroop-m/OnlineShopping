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

import com.cg.onlineshopping.entities.Address;
import com.cg.onlineshopping.service.IAddressService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;


@RestController
@RequestMapping("/api")
@Api(value = "Address Controller", tags = { "AddressAPI" })
@ApiModel(description = "You can find all the address related APIs here ")
@CrossOrigin
public class AddressRestController {

	private static final Logger log =LogManager.getLogger(AddressRestController.class);

	@Autowired
	private IAddressService iAddressService;


	//To view all the addresses
	@ApiOperation(value = "View All Addresses Present in the Database")
	@GetMapping("/viewalladdress") // working
	public ResponseEntity<List<Address>> showAllAddress() {
		List<Address> address = iAddressService.viewAllAddress();
		log.info("Viewed All Addresses Present in the Database");
		return new ResponseEntity<List<Address>>(address,HttpStatus.OK);
	}



	//Adding an address
	@ApiOperation(value = "Add an address into the Database")
	@PostMapping("/addaddress") // working
	public ResponseEntity<Address> createAddress(@RequestBody Address address) {
		Address savedAddress = iAddressService.addAddress(address);
		log.info("New address added into the Database");
		return new ResponseEntity<Address>(savedAddress,HttpStatus.CREATED);
	}


	//Updating a particular address
	@ApiOperation(value = "Update an Address which is already present")
	@PutMapping("/updateaddress") // working 
	public ResponseEntity<Address> updateAddress(@RequestBody Address address) {
		Address updatedAddress = iAddressService.updateAddress(address);
		log.info("Existing address updated in the Database");
		return new ResponseEntity<Address>(updatedAddress,HttpStatus.OK);
	}



	//Deleting an address by address id
	@ApiOperation(value = "Delete an Address using address ID")
	@DeleteMapping("/deleteaddress/{id}") // working
	public ResponseEntity<Address> deleteAddress(@PathVariable("id") int id) {
		log.info("Controller Triggered");
		Address deletedAddress = iAddressService.removeAddress(id);
		return new ResponseEntity<Address>(deletedAddress,HttpStatus.OK);
	}




	//View address by id
	@ApiOperation(value = "View an Address using Address ID")
	@GetMapping("/viewaddress/{id}") // working
	public ResponseEntity<Address> showAddressById(@PathVariable(value = "id") int id) {
		log.info("Controller Triggered");
		Address address = iAddressService.viewAddress(id);
		return new ResponseEntity<Address>(address,HttpStatus.OK);
	}

	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */

}
