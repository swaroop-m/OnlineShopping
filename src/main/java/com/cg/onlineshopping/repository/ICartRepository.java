package com.cg.onlineshopping.repository;

/* @author Sajan Kamath V
 * Repository code starts here
 */


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.Cart;

@Repository
public interface ICartRepository extends JpaRepository<Cart, Integer> {     //Cart Repo


}
