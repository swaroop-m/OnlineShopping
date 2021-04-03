package com.cg.onlineshopping.service;


import java.util.List;

import com.cg.onlineshopping.entities.CustomerCare;

public interface ICustomerCareService {
	
	//addComplaint
	public CustomerCare addComplaints(CustomerCare customerCare);
	
	//delete complaint
	public CustomerCare deleteAllComplaints(CustomerCare customerCare);
	
	//view all complaints
	public List<CustomerCare> viewAllComplaints();

}
