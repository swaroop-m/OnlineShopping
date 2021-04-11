package com.cg.onlineshopping.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;a

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.entities.Order;
import com.cg.onlineshopping.repository.IOrderRepository;
import com.cg.onlineshopping.service.IOrderService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

//Author:Aishwarya A S
//Code starts here

@RestController
@RequestMapping("/api")
@Api(value = "Order Controller", tags = { "OrderAPI" })

public class OrderRestController {
	
	private static final Logger log =LogManager.getLogger(OrderRestController.class);

	@Autowired
	private IOrderRepository orderRepository;

	@Autowired
	private IOrderService orderService;

	Optional<Order> orders = null;
        
    //To add an order
	@ApiOperation(value = "Add a order into the Database")
	@PostMapping("/addorder")
	public ResponseEntity<Order> addOrder(@RequestBody Order order) {
		Order savedOrder= orderService.addOrder(order);
		log.info("New order added into the Database");
		return new ResponseEntity<Order>(savedOrder,HttpStatus.CREATED);
	}
	

    //To update an order
	@ApiOperation(value = "Update order present in the Database")
	@PutMapping("/updateorder")
	public ResponseEntity<Order> updateOrder(@RequestBody Order order) {
		Order updatedOrder=orderService.updateOrder(order);
		log.info("Existing Order updated in the Database");
		return new ResponseEntity<>(updatedOrder, HttpStatus.ACCEPTED);
	}

    //To delete an order based on the Order ID
	@ApiOperation(value = "Delete order present in the Database")
	@DeleteMapping("/deleteorders/{id}")
	public ResponseEntity<Order> removeOrder(@PathVariable("id") int id) {
		Order deletedOrder=orderService.removeOrder(id); 
		log.info("Existing Order deleted in the Database");
		return new ResponseEntity<>(deletedOrder, HttpStatus.OK);
	}
        
    //View an order based on the Order ID
	@ApiOperation(value = "View order present in the Database")
	@GetMapping("/vieworder/{id}")
	@ResponseStatus(value = HttpStatus.OK)
	public Order viewOrder(@PathVariable(value = "id") int id) {
		log.info("Order displayed by ID");
		return orderService.viewOrder(id);
	}

    //To view all the orders
	@ApiOperation(value = "View All orders")
	@GetMapping("/viewallorders")
	public List<Order> viewAllOrder(){
		log.info("All the orders in the database are displayed");
		return orderRepository.findAll();
	}

  

    
    //To get the orders based on Customer ID
	@GetMapping("/allordersbycustomer/{customerId}")
	public ResponseEntity<List<Order>> viewAllOrdersCustomer(@PathVariable int customerId) throws NotFoundException {
		List<Order> order=orderService.viewAllOrdersCustomer(customerId);
		log.info("View All Orders based On Customer ID");
		return new ResponseEntity<List<Order>>(order, HttpStatus.ACCEPTED);

	}

}
//Code ends here
