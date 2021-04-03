package com.cg.onlineshopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.onlineshopping.entities.CartItem;

public interface ICartItemRepository extends JpaRepository<CartItem, Integer> {

}