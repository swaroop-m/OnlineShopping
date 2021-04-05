//package com.cg.onlineshopping.service;
//
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.cg.onlineshopping.entities.CustomerCare;
//import com.cg.onlineshopping.exception.NoComplaintsFoundexception;
//import com.cg.onlineshopping.repository.ICustomerCareRepository;
//
//@Service
//public class ICustomerCareServiceImplementation implements ICustomerCareService {
//	
//	@Autowired
//	ICustomerCareRepository iCustomerCareRepository;
//
//	@Override
//	public CustomerCare addComplaints(CustomerCare customerCare) {
//		iCustomerCareRepository.save(customerCare);
//		return customerCare;
//	}
//
//	@Override
//	public CustomerCare deleteAllComplaints(CustomerCare customerCare) {
//		if(customerCare != null) {
//			iCustomerCareRepository.deleteAll();
//			return customerCare;		
//		}
//		else {
//			throw new NoComplaintsFoundexception("Good service/products..No complaints Found!!");
//		}
//	}
//
//	@Override
//	public List<CustomerCare> viewAllComplaints() {
//		List<CustomerCare> complaints= iCustomerCareRepository.findAll();
//		if (complaints.isEmpty()) {
//			throw new NoComplaintsFoundexception("No Complaints found!!"); // if the cart is empty , it will
//			// throw exception
//		} else
//			return complaints;
//	}
//		
//}
