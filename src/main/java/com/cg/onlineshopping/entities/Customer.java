package com.cg.onlineshopping.entities;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */
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

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer implements Serializable {


	//declaring the fields of the entity class
	private static final long serialVersionUID = 901065612332688851L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)  //Primary key generation automatically according to the database
	private Integer customerId; //primary key
	private String firstName;
	private String lastName;
	private String mobileNumber;

	@OneToOne(cascade =CascadeType.PERSIST) //cascade type all is shorthand for all of the cascade operations.
	@JoinColumn(name = "addressId", referencedColumnName = "addressId")
	private Address address;
	private String email;

	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */	

}
