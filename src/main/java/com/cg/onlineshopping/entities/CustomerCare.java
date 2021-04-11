package com.cg.onlineshopping.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class CustomerCare {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer complaintId;
	
	private String name;
	
	private String phoneNo;
	
	private String productName;
	
	private String message;

}
