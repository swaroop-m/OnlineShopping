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
	
}