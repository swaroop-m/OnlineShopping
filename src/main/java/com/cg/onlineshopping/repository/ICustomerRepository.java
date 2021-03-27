package com.cg.onlineshopping.repository;

/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cg.onlineshopping.entities.Customer;


@Repository
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

	//Extra functions added
	public Customer findByMobileNumber(String mobileNumber);
	public Customer findByEmail(String email);


	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code starts here
	 */
}
