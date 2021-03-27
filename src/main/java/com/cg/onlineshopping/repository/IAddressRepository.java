package com.cg.onlineshopping.repository;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.Address;

@Repository
public interface IAddressRepository extends JpaRepository<Address, Integer> {



	//Extra function added
	Optional<Address> findByAddressId(Integer addressId);

	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code starts here
	 */

}
