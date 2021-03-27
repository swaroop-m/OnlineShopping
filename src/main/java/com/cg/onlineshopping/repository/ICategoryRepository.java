package com.cg.onlineshopping.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.Category;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Integer>{
	List<Category> findByCategoryName(String categoryName);
}
