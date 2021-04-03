package com.cg.onlineshopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.CustomerCare;

@Repository
public interface ICustomerCareRepository extends JpaRepository<CustomerCare, Integer>{

}
