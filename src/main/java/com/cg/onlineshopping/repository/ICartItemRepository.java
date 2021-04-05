package com.cg.onlineshopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.CartItem;

@Repository
public interface ICartItemRepository extends JpaRepository<CartItem, Integer> {

}