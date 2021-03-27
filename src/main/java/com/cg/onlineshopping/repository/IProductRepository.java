package com.cg.onlineshopping.repository;

/**
 * @author Swaroop M
 * Code starts here
 */

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.onlineshopping.entities.Category;
import com.cg.onlineshopping.entities.Product;

@Repository
public interface IProductRepository extends JpaRepository<Product, Integer> {

	// All the methods below are implemented by JPA Repository

	// Method to find a product by Category
	public Product findByCategory(Category category);

	// Method to find a product by Product Name
	public Product findByProductName(String productName);

	// Method to find a product by Manufacturer
	public List<Product> findByManufacturer(String manufacturer);

	// Method to find a product by image
	public Product findByPictureUrl(String pictureUrl);

	// Method to find a product by Product ID
	public Product findByProductId(Integer productId);

}

/**
 * @author Swaroop M Code ends here
 */