package com.cg.onlineshopping.test;
/**
 * @author Swaroop M
 * Code starts here
 */
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.cg.onlineshopping.entities.Category;
import com.cg.onlineshopping.entities.Product;
import com.cg.onlineshopping.exception.AlreadyExistsException;
import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.repository.ICategoryRepository;
import com.cg.onlineshopping.repository.IProductRepository;
import com.cg.onlineshopping.service.ProductServiceImpl;

@SpringBootTest
public class ProductServiceTest {

	Product product1;
	Product product2;
	Product product3;
	Category category;
	@Autowired
	ProductServiceImpl productService = new ProductServiceImpl();
	@MockBean
	IProductRepository iProductRepository;
	@MockBean
	ICategoryRepository iCategoryRepository;

	@BeforeEach
	void setup() {
		category = new Category("category1");
		product1 = new Product("product1", "dim", "spec", "manufacture", 2, "url", 10.0, category);
		product2 = new Product("product2", "dim", "spec", "manufacture", 2, "url", 10.0, category);
		product3 = new Product("product3", "dim", "spec", "manufacture", 2, "url", 10.0, category);
	}

	@Test
	void testAddProduct() {
		when(iProductRepository.save(product1)).thenReturn(product1);
		Product product = productService.addProduct(product1);
		Assertions.assertEquals(product, product1);
	}

	@Test
	void testAddProduct_AlreadyExistsException() {
		when(iProductRepository.save(product1)).thenThrow(new AlreadyExistsException("Product with same name exists."));
		Assertions.assertThrows(AlreadyExistsException.class,() ->productService.addProduct(product1));
	}

	@Test
	void testUpdateProduct() {

		product3 = new Product(2, "product3", "dim", "spec", "manufacture", 2, "url", 10.0, category);
		Optional<Product> product2 = Optional
				.of(new Product(2, "product2", "dim", "spec", "manufacture", 2, "url", 10.0, category));
		when(iProductRepository.findById(2)).thenReturn(product2);
		Product product1 = productService.updateProduct(product3);
		Assertions.assertEquals(product3, product1);
	}

	@Test
	void testUpdateProduct_NotFoundException() {
		int id = 4;
		when(iProductRepository.findById(id)).thenThrow(new NotFoundException("No Product found"));
		Assertions.assertThrows(NotFoundException.class,() ->productService.updateProduct(product1));
	}
	
	@Test
	void testViewAllProducts() {
		List<Product> allProductsInDatabase = new ArrayList<Product>();
		allProductsInDatabase.add(product1);
		allProductsInDatabase.add(product2);
		allProductsInDatabase.add(product3);
		when(iProductRepository.findAll()).thenReturn(allProductsInDatabase);
		List<Product> allProductsFound = productService.viewAllProducts();
		Assertions.assertEquals(allProductsFound, allProductsInDatabase);

	}
	
	@Test
	void testViewAllProduct_NotFoundException() {
		when(iProductRepository.findAll()).thenThrow(new NotFoundException("No Products found"));
		Assertions.assertThrows(NotFoundException.class,() ->productService.viewAllProducts());
	}

	@Test
	void testViewProductByCategory() {
		List<Category> categories = new ArrayList<Category>();
		categories.add(category);
		List<Product> allProductsInCategory = new ArrayList<Product>();
		allProductsInCategory.add(product1);
		when(iCategoryRepository.findByCategoryName("category1")).thenReturn(categories);
		when(iProductRepository.findByCategory(category)).thenReturn(product1);
		List<Product> allProductsFound = productService.viewProductByCategory("category1");
		Assertions.assertEquals(allProductsFound, allProductsInCategory);

	}
	
	@Test
	void testViewProductByCategory_NotFoundException() {
		String cname = "asdf";
		when(iCategoryRepository.findByCategoryName("category1")).thenThrow(new NotFoundException("No Products found in category " + cname));
		Assertions.assertThrows(NotFoundException.class,() ->productService.viewProductByCategory(cname));
	}

	@Test
	void testViewProduct() {
		Optional<Product> product = Optional.of(product1);
		int id = 2;
		when(iProductRepository.findById(id)).thenReturn(product);
		Product p = productService.viewProduct(2);
		Assertions.assertEquals(product1, p);

	}

	@Test
	void testViewProduct_NotFoundException() {
		int id = 4;
		when(iProductRepository.findById(id)).thenThrow(new NotFoundException("No Product found with ID " + id));
		Assertions.assertThrows(NotFoundException.class,() ->productService.viewProduct(id));
	}
	
	@Test
	void testRemoveProduct() {
		Optional<Product> product = Optional.of(product1);
		int id = 2;
		when(iProductRepository.findById(id)).thenReturn(product);
		Product p = productService.removeProduct(id);
		Assertions.assertEquals(product1, p);

	}
	
	@Test
	void testRemoveProduct_NotFoundException() {
		int id = 4;
		when(iProductRepository.findById(id)).thenThrow(new NotFoundException("No Product found with ID " + id));
		Assertions.assertThrows(NotFoundException.class,() ->productService.removeProduct(id));
	}

}
/**
 * @author Swaroop M
 * Code ends here
 */
