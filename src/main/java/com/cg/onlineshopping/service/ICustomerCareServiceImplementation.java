package com.cg.onlineshopping.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.CustomerCare;
import com.cg.onlineshopping.repository.ICustomerCareRepository;

@Service
public class ICustomerCareServiceImplementation implements ICustomerCareService {
	
	@Autowired
	ICustomerCareRepository iCustomerCareRepository;

	@Override
	public CustomerCare addComplaints(CustomerCare customerCare) {
		iCustomerCareRepository.save(customerCare);
		return customerCare;
	}

	

}
