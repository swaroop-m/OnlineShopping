package com.cg.onlineshopping.entities; //Cart entity

/*@author Sajan Kamath V 
 * Entity Code starts here
 */
/*To serialize an object means to convert its state to a byte stream,
so that the byte stream can be reverted back into a copy of the object.*/
import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cartId; 									// cartId is generated automatically

	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "customerId")
	private Customer customer;                                     //relation with Customer entity (Cart->customer)
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="cartId")
	@JsonManagedReference
	private List<CartItem> products;
}