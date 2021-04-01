package com.cg.onlineshopping.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.onlineshopping.entities.DeliveryAddress;

public interface IDeliveryAddressRepository extends JpaRepository<DeliveryAddress, Integer> {

	Optional<DeliveryAddress> findById(Integer addressId);
	

}
