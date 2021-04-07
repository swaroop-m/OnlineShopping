//package com.cg.onlineshopping.test;
//
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//
//import com.cg.onlineshopping.entities.Cart;
//import com.cg.onlineshopping.entities.CartItem;
//import com.cg.onlineshopping.entities.Customer;
//import com.cg.onlineshopping.exception.NoProductFoundInCartException;
//import com.cg.onlineshopping.repository.ICartItemRepository;
//import com.cg.onlineshopping.repository.ICartRepository;
//import com.cg.onlineshopping.service.ICartServiceImplementation;
//
//
//@SpringBootTest
//public class CartServiceTest {
//
//	Cart cart;
//	CartItem cartItem;
//	CartItem cartItem1;
//	CartItem cartItem2;
//	CartItem cartItem3;
//	Cart cart1;
//	Cart cart2;
//	Cart cart3;
//	Customer cust;
//
//	@Autowired
//	ICartServiceImplementation cartService = new ICartServiceImplementation();
//
//	@MockBean
//	ICartRepository iCartRepository;
//	
//	@MockBean
//	ICartItemRepository iCartItemRepository;
//
//	@BeforeEach
//	void setup() {   //setting up values to run test cases
//		Cart cart=new Cart();
//		List<CartItem> products = new ArrayList<>();
//		cart1= new Cart(1,cust,products);
//		cartItem1 = new CartItem(1, 1202, "table","13m ", "Kids table" ," Apple", 2, 12000, cart);
//		cartItem2  = new CartItem(2, 12024, "Chair","20m ", "Childrens chair" ,"Neelkamal", 6, 1800, cart);
//		cartItem3 = new CartItem(3, 10102, "Iphone","6m ", "128gb rom" ," Apple", 1, 75000, cart);
//	}
//
//	@Test
//	void testAddProductToCart() { // Adding Product To Cart Test Successful!
//		when(iCartRepository.save(cart1)).thenReturn(cart1);
//		Cart cartItems = cartService.addProductToCart(cart1);
//		Assertions.assertEquals(cartItems, cart1);
//	}
//
////	@Test
////	void testRemoveProductFromCart() { // Remove Product From Cart using ProductId
////		int id = 12024;
////		when(iCartItemRepository.findById(id)).thenReturn(cartItem);
////		Cart removal = cartService.removeProductFromCart(id);
////		Assertions.assertEquals(cart1, removal);
////	}
//
////	@Test
////	void testUpdateProductQuantity() { // Update Quantity of product in Cart Successful!
////		cart2 = new Cart(2, 7502, "Computer", 50000, 1, cust);
////		Optional<Cart> cartquantity = Optional.of(new Cart(2, 7502, "Computer", 50000, 3, cust));
////		when(iCartRepository.findById(2)).thenReturn(cartquantity);
////		Cart updatedCart = cartService.updateProductQuantity(cart2);
////		Assertions.assertEquals(cart2, updatedCart);
////	}
//
////	@Test
////	void testremoveAllProducts(Cart cart) {   //error in this test case
////		cart=new Cart();
////		Cart clear=(Cart) cartService.removeAllProducts(cart);
////		Assertions.assertEquals(clear,cart);
////	}
//
//	@Test
//	void testviewAllProductsFromCart() {     //View All Products from cart
//		List<Cart> allProductsInCart = new ArrayList<Cart>();
//		allProductsInCart.add(cart1);
//		allProductsInCart.add(cart2);
//		allProductsInCart.add(cart3);
//		when(iCartRepository.findAll()).thenReturn(allProductsInCart);
//		List<Cart> allCartProducts = cartService.viewAllProductsFromCart();
//		Assertions.assertEquals(allCartProducts, allProductsInCart);
//	}
//	
//	@Test
//	void testViewAllProductsFromCart_NoProductFoundInCartException() {
//		when(iCartRepository.findAll()).thenThrow(new NoProductFoundInCartException("No Products found in Cart"));
//		Assertions.assertThrows(NoProductFoundInCartException.class,() ->cartService.viewAllProductsFromCart());
//	}
//}