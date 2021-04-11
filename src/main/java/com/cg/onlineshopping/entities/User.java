package com.cg.onlineshopping.entities;

//@author Safiya Seher


import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import io.swagger.annotations.Api;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity     //creating the table in the database
@Data		//creating getters, setters, hashcode, toString
@NoArgsConstructor	//creating a no argument constructor
@AllArgsConstructor	//creating an all arguments constructor
@Api(value = "UserEntity", tags = { "User Entity" })
@Table(name="Users")	//storing the table as "users" in database as "user" is a reserved keyword
public class User
{

	//private static final long serialVersionUID = 6031109082554084714L;
	//Specifying the primary key for the table
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userId;
	private String userName;
	private String password;
	private String role;
	
	@OneToOne(cascade = CascadeType.PERSIST) //adding a shared primary key with customer table
	//@PrimaryKeyJoinColumn
	private Customer customer;

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public User(Integer userId, String userName, String password, String role, Customer customer) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.role = role;
		this.customer = customer;
	}

	public User() {
		super();
	}
	
	
	
}