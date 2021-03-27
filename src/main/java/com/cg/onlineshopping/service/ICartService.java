package com.cg.onlineshopping.service; //business logic

/*author:Sajan Kamath V 
 * service interface Code starts here
 */
import java.util.List;

import com.cg.onlineshopping.entities.Cart;

public interface ICartService {

	//1. Add Product To Cart
	public Cart addProductToCart(Cart cart);

	//2.Remove product from cart by product Id
	public Cart removeProductFromCart(int id);

	//3.Update Product quantity in cart
	public Cart updateProductQuantity(Cart cart);

	//4. Clear Cart
	public Cart removeAllProducts(Cart cart);

	//5. View All products in Cart
	public List<Cart> viewAllProductsFromCart();

}
