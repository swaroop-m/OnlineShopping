package com.cg.onlineshopping.entities; //Cart entity

/*@author Sajan Kamath V 
 * Entity Code starts here
 */
/*To serialize an object means to convert its state to a byte stream,
so that the byte stream can be reverted back into a copy of the object.*/
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Cart")
public class Cart implements Serializable {  
	/**
	 * 
	 */
	private static final long serialVersionUID = 4412465921411153183L; // to save the state of object

	@Id  //annotation for primary key in the cart table
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer cartId; 									// cartId is generated automatically

	private int productId;										// product details
	private String productName; 
	private int price;

	private int quantity; 											// quantity of product

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "customerId")
	private Customer customer;                                     //relation with Customer entity (Cart->customer)

}