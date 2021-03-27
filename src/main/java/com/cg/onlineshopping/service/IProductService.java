package com.cg.onlineshopping.service;

/**
 * @author Swaroop M
 * Code starts here
 */

import java.util.List;

//import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Product;

// Services to be implemented
public interface IProductService {

	public List<Product> viewAllProducts(); 
	public Product addProduct(Product product);
	public Product updateProduct(Product product);
	public Product viewProduct(int id);
	public List<Product> viewProductByCategory(String cname); 
	public Product removeProduct(int id);
}
/**
 * @author Swaroop M
 * Code ends here
 */
