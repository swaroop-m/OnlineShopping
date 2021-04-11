package com.cg.onlineshopping.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.exception.ValidationException;
import com.cg.onlineshopping.entities.Customer;
//import com.cg.onlineshopping.entities.DeliveryAddress;
import com.cg.onlineshopping.entities.Order;
import com.cg.onlineshopping.repository.ICustomerRepository;
import com.cg.onlineshopping.repository.IOrderRepository;

//Author:Aishwarya A S
//Code starts here

@Service
public class IOrderServiceImplementation implements IOrderService{
	//Autowiring beans
	@Autowired
	private IOrderRepository orderRepository;

	@Autowired
	private ICustomerRepository custRepository;

	

	Optional<Order> orderOptional = null;

	//Adds an order
	@Override
	public Order addOrder(Order o) throws ValidationException {
		
		LocalDate orderDateExisting=o.getOrderDate();
		Customer cust=o.getCustomer();
		
		
		
		
		
		
		return orderRepository.save(o);
	}

	//Updating an order
	@Override
	public Order updateOrder(Order order)throws NotFoundException {
		// find the order in the database which is to be updated 
		Optional<Order> existing = orderRepository.findById(order.getOrderId());
		
		// If no such order exist throw not found exception 
		if (existing.isEmpty()) {
			throw new NotFoundException("No Order found");
		} 
		
		// If order exist then check if fields of updating order is not empty
		else {
			Order existingOrder = existing.get();

			}
//			if (order.getCustomer() != null) {
//
//				existingOrder.setCustomer(order.getCustomer());
//			}
//
//			if (order.getOrderDate() != null) {
//
//				existingOrder.setOrderDate(order.getOrderDate());
//			}
//			if (order.getOrderStatus() != null) {
//
//				existingOrder.setOrderStatus(order.getOrderStatus());
//			}
//			if (order.getCartItem() != null) {
//
//				existingOrder.setCartItem(order.getCartItem());
//			}
//
//			// perform update operation to the database table
//			orderRepository.save(existingOrder);
			// return the order which is updated
//			return existingOrder;
		return null;
//		}

	}

	//Remove an order based on order ID
	@Override
	public Order removeOrder(Integer orderId)throws NotFoundException {
		Optional<Order> order = orderRepository.findById(orderId);
		if(order.isPresent()) {
			Order deletedOrder = order.get();
			orderRepository.delete(deletedOrder);
			return deletedOrder;
		}
		else {
			throw new NotFoundException("No Order found with ID: " + orderId);
		}
	}

	//View an order based on order ID
	@Override
	public Order viewOrder(Integer  orderId) {

		Optional<Order> order = orderRepository.findById(orderId);
		if (order.isPresent()) {
			return order.get();
		} else {
			throw new NotFoundException("No Order found with ID " + orderId);
		}

	}

	//View orders based on order date
	@Override
	public List<Order> viewAllOrdersByDate(LocalDate date) {
		List<Order> orders = orderRepository.findByOrderDate(date);
		if(orders.isEmpty()) {
			throw new NotFoundException("No order found for date : " +date);
		}
		return orders;
	}

	
	//View orders based on Customer ID
	@Override
	public List<Order> viewAllOrdersCustomer(Integer customerId) throws NotFoundException{
		Optional<Customer> customer = custRepository.findById(customerId);
		if(customer.isEmpty())
			throw new NotFoundException("Order with Customer id "+customerId+" is not Found!");

		else {
			Customer customer1=customer.get();
			List<Order> order=orderRepository.findByCustomer(customer1);

			return order;
		}
	}

}
//Code ends here
//Author:Aishwarya A S
