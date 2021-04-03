package com.cg.onlineshopping.controller;

/*author:Sajan Kamath V 
 * Controller Code starts here
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

import com.cg.onlineshopping.entities.Cart;
import com.cg.onlineshopping.entities.CartItem;
import com.cg.onlineshopping.service.ICartService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;

@RestController
@RequestMapping(value = "/api")
@Api(value = "Cart Controller", tags = { "CartAPI" })
@ApiModel(description = "You can find all the Cart related services here ")
@CrossOrigin(origins="http://localhost:3000")
public class CartRestController {
	
	private static final Logger log =LogManager.getLogger(CartRestController.class);

	@Autowired
	ICartService iCartService;

	@GetMapping("/") //for testing the controller
	public String CartPage() {
	return " Shopping Cart ";
	}

	// 1. Add Product To Cart //Working
	@PostMapping("/addproducttocart")
	public ResponseEntity<Cart> addProductToCart(@RequestBody Cart cart) {
		Cart addProduct = iCartService.addProductToCart(cart);
		log.info("Added All Products to Cart Database");
		return new ResponseEntity<Cart>(addProduct, HttpStatus.CREATED);
	}

	// 2.Delete product from cart by product Id //Working
	@DeleteMapping("/removeproductfromcart/{id}" ) // working
	public ResponseEntity<CartItem> removeProductFromCart(@PathVariable int id) {
		
		CartItem deletedproduct = iCartService.removeProductFromCart(id);
		log.info("Removed Product From Cart ");
		return new ResponseEntity<CartItem>(deletedproduct, HttpStatus.OK);
	}

	// 3.Update Product quantity in cart //Working
	@PutMapping("/updateproductquantity")
	public ResponseEntity<CartItem> updateProductQuantity(@RequestBody CartItem cartItem) {
		CartItem updateProduct = iCartService.updateProductQuantity(cartItem);
		log.info("Updated Product Quantity in Cart Database");
		return new ResponseEntity<CartItem>(updateProduct,HttpStatus.OK);
	}

	// 4. Remove All Products in Cart //Working
	@DeleteMapping("/removeallproducts")
	public ResponseEntity<Cart> removeAllProducts(Cart cart) {
		Cart cartProducts = iCartService.removeAllProducts(cart);
		log.info("Cleared Cart Database");
		return new ResponseEntity<Cart>(cartProducts,HttpStatus.ACCEPTED);
	}

	// 5. View Cart //Working
	@GetMapping("/viewallproductsfromcart")
	public ResponseEntity<List<Cart>> viewAllProductsFromCart() {
		List<Cart> cartProducts = iCartService.viewAllProductsFromCart();
		log.info("To View all Products present in Cart Database");
		return new ResponseEntity<List<Cart>>(cartProducts, HttpStatus.OK);
	}
	
	

}