package com.cg.onlineshopping.service;

/**
 * @author Swaroop M
 * Code starts here
 */

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Category;
import com.cg.onlineshopping.entities.Product;
import com.cg.onlineshopping.exception.AlreadyExistsException;
import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.repository.ICategoryRepository;
import com.cg.onlineshopping.repository.IProductRepository;

@Service
public class ProductServiceImpl implements IProductService {

	// To perform CRUD operations on database tables
	@Autowired
	IProductRepository iProductRepository;
	// To perform CRUD operations on database tables
	@Autowired
	ICategoryRepository iCategoryRepository;

	// Method to view all products present in the database.
	@Override
	public List<Product> viewAllProducts() {
		// Retrieval Operation to get all product details from database.
		List<Product> allProducts = iProductRepository.findAll();
		// Check if no products are present in database.
		if (allProducts.isEmpty()) {
			// If product table is empty, throw an exception.
			throw new NotFoundException("No Products found");
		}
		// If products exists, then return all the products.
		else {
			return allProducts;
		}
	}

	// Method to add a product into the database
	@Override
	public Product addProduct(Product product) {
		// Checking if a product with the same name doesn't exists.
		Product p = iProductRepository.findByProductName(product.getProductName());
		if (p == null) {
			// Create Operation to save a product to database.
			iProductRepository.save(product);
			// Returning the saved product.
			return product;
		}
		// If a product with the same name exists throw an exception.
		else {
			throw new AlreadyExistsException("Product with same name exists.");
		}
	}

	// Method to update product in the database
	@Override
	public Product updateProduct(Product product) {
		// find the product in the database which is to be updated
		Optional<Product> existing = iProductRepository.findById(product.getProductId());
		// If no such product exist throw not found exception
		if (existing.isEmpty()) {
			throw new NotFoundException("No Product found");
		}
		// If product exist then check if fields of updating product is not empty
		// then update that product.
		else {
			Product existingProduct = existing.get();

			if (product.getCategory() != null) {

				existingProduct.setCategory(product.getCategory());
			}
			if (product.getDimension() != null) {

				existingProduct.setDimension(product.getDimension());
			}
			if (product.getManufacturer() != null) {

				existingProduct.setManufacturer(product.getManufacturer());
			}
			if (product.getProductName() != null) {

				existingProduct.setProductName(product.getProductName());
			}
			if (product.getQuantity() != null) {

				existingProduct.setQuantity(product.getQuantity());
			}
			if (product.getSpecification() != null) {

				existingProduct.setSpecification(product.getSpecification());
			}
			if (product.getPictureUrl() != null) {

				existingProduct.setPictureUrl(product.getPictureUrl());
			}
			if (product.getPrice() != null) {

				existingProduct.setPrice(product.getPrice());
			}
			// perform update operation to the database table
			iProductRepository.save(existingProduct);
			// return the product which is updated
			return existingProduct;
		}

	}

	// Method to view a particular product based on ID
	@Override
	public Product viewProduct(int id) {
		// TODO Auto-generated method stub
		// Fetching product details from database
		Optional<Product> product = iProductRepository.findById(id);
		// If the product is found return it
		if (product.isPresent()) {
			return product.get();
		}
		// If product is not found throw an exception
		else {
			throw new NotFoundException("No Product found with ID " + id);
		}
	}

	// Method to view a particular product based on Category
	@Override
	public List<Product> viewProductByCategory(String cname) {
		// TODO Auto-generated method stub
		// Fetching category details from database using category name
		List<Category> category = iCategoryRepository.findByCategoryName(cname);
		List<Product> products = new ArrayList<Product>();
		// Finding the products that belong to that particular category
		for (Category c : category) {
			Product product = iProductRepository.findByCategory(c);
			// Adding those products to a list
			products.add(product);
		}
		// If the list is empty throw an exception
		if (products.isEmpty()) {
			throw new NotFoundException("No Products found in category " + cname);
		}
		// If list contains values return the list
		else {
			return products;
		}

	}

	// Method to remove a product from database table
	// @Override
	public Product removeProduct(int id) {
		// Find the product which has to be removed
		Optional<Product> product = iProductRepository.findById(id);
		// If the product is present in database table delete return the product
		if (product.isPresent()) {
			Product deletedProduct = product.get();
			iProductRepository.delete(deletedProduct);
			return deletedProduct;
		}
		// If the product is not found in the database then throw an exception
		else {
			throw new NotFoundException("No Product found with ID " + id);

		}

	}

}

/**
 * @author Swaroop M Code ends here
 */
