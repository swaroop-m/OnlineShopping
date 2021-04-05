package com.cg.onlineshopping.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class CustomerCare {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer complaintId;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "customerId")
	private Customer customer;
	
	private String name;
	
	private String phoneNo;
	
	private String productId;
	
	private String message;

}
