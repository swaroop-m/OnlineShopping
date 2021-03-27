package com.cg.onlineshopping.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Order;
//Author:Aishwarya A S
//Code starts here

@Service
public interface IOrderService{
	public Order addOrder(Order order);
	public Order updateOrder(Order order);
	public Order removeOrder(Integer orderId);
	public Order viewOrder(Integer orderId);
	public List<Order> viewAllOrdersByDate(LocalDate date);
	public List<Order> viewAllOrdersCustomer(Integer customerId);
	public List<Order> viewAllOrdersByAddressId(Integer addressId);	
}
//Code ends here
//Author:Aishwarya A S
