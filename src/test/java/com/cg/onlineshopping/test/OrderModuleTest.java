package com.cg.onlineshopping.test;

import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.onlineshopping.entities.Address;
import com.cg.onlineshopping.entities.Customer;

import com.cg.onlineshopping.entities.Order;
import com.cg.onlineshopping.entities.CartItem;
import com.cg.onlineshopping.repository.ICustomerRepository;
import com.cg.onlineshopping.repository.IOrderRepository;
import com.cg.onlineshopping.service.IOrderServiceImplementation;




@SpringBootTest
public class OrderModuleTest {


	Customer customer;
	
	Order order1;
	Order order2;
	Order order3;
	CartItem product;
	Address address;
	@Autowired
	IOrderServiceImplementation orderServiceImpl=new IOrderServiceImplementation();

	//Mock object of IOrderRepository
	@MockBean
	IOrderRepository orderRepository;
	
	//Mock object of ICustomerRepository
	@MockBean
	ICustomerRepository custRepository;
	

	
	
	//Method that is executed before each test case
	@BeforeEach
	void setUp() {
		
		customer=new Customer(9, "aishwarya", "shan", null, address, null);

		order1=new Order(1,LocalDate.of(2021, 11, 12), "10", customer,null);
		order2=new Order(4,LocalDate.of(2021, 10, 24), "16", customer, null);
		order3=new Order(6,LocalDate.of(2020, 01, 16), "20", customer, null);
	}

	//Test the addOrder method
	@Test
	public void testAddOrders() {
		when(orderRepository.save(order1)).thenReturn(order1);
		Order order = orderServiceImpl.addOrder(order1);
		Assertions.assertEquals(order, order1);

	}

	//Tests the updateOrderMethod
	@Test
	public void testUpdateOrders() {
		order2 = new Order(3, LocalDate.of(2022, 01, 22), "12",customer,null);
		Optional<Order> order2 = Optional
				.of(new Order(3,LocalDate.of(2021, 11, 24), "14", customer, null));
		when(orderRepository.findById(3)).thenReturn(order2);
		Order order3=order2.get();
		Order order1 = orderServiceImpl.updateOrder(order3);
		Assertions.assertEquals(order3, order1);
	}

	//Tests removeOrder method
	@Test
	public void testRemoveOrders(){
		Optional<Order> order = Optional.of(order1);
		int id = 3;
		when(orderRepository.findById(id)).thenReturn(order);
		Order o = orderServiceImpl.removeOrder(id);
		Assertions.assertEquals(order1, o);
	}

	//Tests viewOrder method
	@Test
	public void testViewOrder(){
		Optional<Order> order = Optional.of(order1);
		int id = 3;
		when(orderRepository.findById(id)).thenReturn(order);
		Order o = orderServiceImpl.viewOrder(3);
		Assertions.assertEquals(order1, o);		
	}

	//Tests viewAllOrdersByDate method
	@Test
	public void testViewAllOrdersByDate(){
		List<Order> order=new ArrayList<Order>();
		order.add(order1);
		when(orderRepository.findByOrderDate(LocalDate.of(2021, 11, 12))).thenReturn(order);
		List<Order> o=orderServiceImpl.viewAllOrdersByDate(LocalDate.of(2021, 11, 12));
		Assertions.assertEquals(order,o);

	}

	
	
	//Tests viewAllOrdersCustomer method
	@Test
	public void testViewAllOrdersCustomer() {
		List<Order> order=new ArrayList<Order>();
		order.add(order1);
		Optional<Customer> customer1=Optional.of(customer);
		when(custRepository.findById(9)).thenReturn(customer1);
		when(orderRepository.findByCustomer(customer)).thenReturn(order);
		List<Order> o=orderServiceImpl.viewAllOrdersCustomer(9);
		Assertions.assertEquals(order,o);

	}

	@AfterEach
	public void testAfterEach() {
		customer=null;
	
		order1=null;
		order2=null;
		order3=null;
		product=null;
	}


}
//Code ends here
