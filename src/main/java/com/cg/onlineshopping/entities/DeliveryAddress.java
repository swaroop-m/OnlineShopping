package com.cg.onlineshopping.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

//Code starts here
@Entity
@Data
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class DeliveryAddress implements Serializable {

		
		private static final long serialVersionUID = -2554676829498510649L;
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Integer dAddressId;
		private String dStreetNo;
		private String dBuildingName;
		private String dCity;
		private String dState;
		private String dCountry;
		private String dPincode;
		
	//Code ends here	
		//Author:Aishwarya A S
}
