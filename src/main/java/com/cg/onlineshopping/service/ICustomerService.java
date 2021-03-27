package com.cg.onlineshopping.service;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */

import java.util.List;

import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Customer;


@Service
public interface ICustomerService {

	public Customer addCustomer(Customer cust);//add customer method
	public Customer updateCustomer(Customer cust);//update customer method
	public Customer removeCustomer(Integer id);//remove customer method
	public Customer viewCustomer(int id);//view customer method
	public List<Customer> viewAllCustomers();//view all customer method
	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */


}
