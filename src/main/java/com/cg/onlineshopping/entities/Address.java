package com.cg.onlineshopping.entities;
/**
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */

import java.io.Serializable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address implements Serializable{

	//declaring the fields of the entity class
	private static final long serialVersionUID = -2554676829498510649L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) //Generating the primary key automatically
	private Integer addressId; //primary key
	private String streetNo;
	private String buildingName;
	private String city;
	private String state;
	private String country;
	private String pincode;

	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */

}
