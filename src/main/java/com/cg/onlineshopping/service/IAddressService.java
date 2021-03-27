package com.cg.onlineshopping.service;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */

import java.util.List;

import org.springframework.stereotype.Service;
import com.cg.onlineshopping.entities.Address;

@Service
public interface IAddressService {

	public Address addAddress(Address add);// add address method
	public Address updateAddress(Address add);//update address method
	public Address removeAddress(Integer id); //remove address method
	public List<Address> viewAllAddress();//view all address method
	public Address viewAddress(int id);//view address method

	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */
}
