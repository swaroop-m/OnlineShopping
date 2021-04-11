package com.cg.onlineshopping.repository;

import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.Customer;

import com.cg.onlineshopping.entities.Order;

import java.util.List;
import java.util.Optional;
//Author:Aishwarya A S
//Code starts here

@Repository
public interface IOrderRepository extends JpaRepository<Order, Integer>{

	public List<Order> findByOrderId(Optional<Order> order);
	public Optional<Order> findById(Integer orderId);
	public Order getOrderByOrderDate(LocalDate orderDate);
	public List<Order> findOrderByOrderId(Integer orderId);
	public List<Order> findByOrderDate(LocalDate date);
	public List<Order> findByCustomer(Customer customer);
	
}
//Code ends here
//Author:Aishwarya A S
