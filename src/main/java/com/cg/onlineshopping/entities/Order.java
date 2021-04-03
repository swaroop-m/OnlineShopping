package com.cg.onlineshopping.entities;

import java.io.Serializable;
import java.time.LocalDate;
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
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Author:Aishwarya A S
//Code starts here

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
//@Table(name="Orders")
@ApiModel(description = "Details about the Order")
public class Order implements Serializable {

	private static final long serialVersionUID = 1L;
     
    //Primary key for the order table
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)//Value of primary key is auto generated 
	public Integer orderId;
        
     //Specification of the input format for order date
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	@NotNull
	public LocalDate orderDate;

	public String orderStatus;

     //Establing a one to one relationship with the customer table
	@OneToOne(cascade =CascadeType.ALL)
 //Customer ID is the foreign key
	public Customer customer;

    //Establishing a one to many relationship with the product table
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="cartId")
	@JsonManagedReference
    private List<CartItem> productlist;

    //Establishing a one to one relationship with the Address table to store the delivery address
	@OneToOne(cascade = CascadeType.ALL)
	private DeliveryAddress deliveryAddress;

	public Order(LocalDate orderDate, String orderStatus, Customer customer,List<CartItem> productlist,DeliveryAddress deliveryAddress) {
		super();
		this.orderDate=orderDate;
		this.orderStatus=orderStatus;
		this.customer=customer;
		this.productlist=productlist;
		this.deliveryAddress=deliveryAddress;

	}
}
//Code ends here
//Author:Aishwarya AS
