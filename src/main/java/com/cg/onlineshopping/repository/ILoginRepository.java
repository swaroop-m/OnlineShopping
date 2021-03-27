package com.cg.onlineshopping.repository;

//@author Safiya Seher


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.User;

@Repository
public interface ILoginRepository extends JpaRepository<User, Integer>{
	
	//Extra functions added
	public User findByUserName(String name);
	public User findUserByUserNameAndPassword(String userName , String password);
}
