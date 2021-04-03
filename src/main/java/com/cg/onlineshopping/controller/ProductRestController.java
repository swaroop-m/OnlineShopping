package com.cg.onlineshopping.controller;

/**
 * @author Swaroop M
 * Code starts here
 */

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.onlineshopping.entities.Product;
//import com.cg.onlineshopping.service.IProductService;
import com.cg.onlineshopping.service.ProductServiceImpl;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(path = "/api")
@Api(value = "Product Controller", tags = { "ProductAPI" })
@ApiModel(description = "You can find all the product related APIs here ")
@CrossOrigin(origins="http://localhost:3000")
public class ProductRestController {

	private static final Logger log =LogManager.getLogger(ProductRestController.class);
	
	@Autowired
	private ProductServiceImpl iProductService;

	@ApiOperation(value = "Homepage URL")
	@GetMapping("/") // working
	public ResponseEntity<String> homePage() {
		String homeString = " in home";
		log.info("Home Page Visited");
		return new ResponseEntity<String>(homeString,HttpStatus.OK);
	}
	
	@ApiOperation(value = "View All Products Present in the Database")
	@GetMapping("/viewallproducts") // working
	public ResponseEntity<List<Product>> showAllProducts() {
		List<Product> products = iProductService.viewAllProducts();
		log.info("Viewed All Products Present in the Database");
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
	}
	
	@ApiOperation(value = "Add a product into the Database")
	@PostMapping("/saveproduct") // working
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
		Product savedProduct = iProductService.addProduct(product);
		log.info("New product added into the Database");
		return new ResponseEntity<Product>(savedProduct,HttpStatus.CREATED);
	}
	
	@ApiOperation(value = "Update a Product which is already present")
	@PutMapping("/updateproduct") // working 
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
		Product updatedProduct = iProductService.updateProduct(product);
		log.info("Existing product updated in the Database");
		return new ResponseEntity<Product>(updatedProduct,HttpStatus.OK);
	}
	
	@ApiOperation(value = "View a Product using Product ID")
	@GetMapping("/viewproduct/{id}") // working
	public ResponseEntity<Product> showProductById(@PathVariable(value = "id") int id) {
		log.info("Controller Triggered");
		Product product = iProductService.viewProduct(id);
		return new ResponseEntity<Product>(product,HttpStatus.OK);
	}
	
	@ApiOperation(value = "Delete a Product using product ID")
	@DeleteMapping("/deleteproduct/{id}") // working
	public ResponseEntity<Product> deleteProduct(@PathVariable("id") int id) {
		log.info("Controller Triggered");
		Product deletedProduct = iProductService.removeProduct(id);
		return new ResponseEntity<Product>(deletedProduct,HttpStatus.OK);
	}
	
	@ApiOperation(value = "View Products present in a particular Category")
	@GetMapping("/viewbycategory/{cname}") // working
	public ResponseEntity<List<Product>> showProductByCategory(@PathVariable(value = "cname") String cname) {
		log.info("Controller Triggered");
		List<Product> productsInCategory = iProductService.viewProductByCategory(cname);
		return new ResponseEntity<List<Product>>(productsInCategory,HttpStatus.OK);
	}

}

/**
 * @author Swaroop M
 * Code ends here
 */
