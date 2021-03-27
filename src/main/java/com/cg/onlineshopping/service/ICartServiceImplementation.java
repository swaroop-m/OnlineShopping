package com.cg.onlineshopping.service;

/*author:Sajan Kamath V 
 * Service Implementation Code starts here
 */
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Cart;
import com.cg.onlineshopping.exception.CartIsAlreadyEmptyException;
import com.cg.onlineshopping.exception.NoProductFoundInCartException;
import com.cg.onlineshopping.exception.ProductIdNotInCartException;
import com.cg.onlineshopping.repository.ICartRepository;

@Service
public class ICartServiceImplementation implements ICartService {  //Service Implementation

	@Autowired
	ICartRepository iCartRepository;

	//1. Add Product To Cart
	@Override
	public Cart addProductToCart(Cart cart) {
		iCartRepository.save(cart);
		return cart;
	}

	//2.Remove product from cart by product Id
	@Override
	public Cart removeProductFromCart(int id) {
		Optional<Cart> cart = Optional.of(iCartRepository.findByProductId(id));
		if (cart.isPresent()) {
			Cart removeCart = cart.get();
			iCartRepository.delete(removeCart);
			return removeCart;
		} else {
			throw new ProductIdNotInCartException("No product found in cart with ID " + id); //if the given cart product is not present in cart it will return an exception
		}
	}

	//3.Update Product quantity in cart
	@Override
	public Cart updateProductQuantity(Cart cart) {
		Optional<Cart> currentCart = iCartRepository.findById(cart.getCartId());
		if (currentCart.isEmpty()) {
			throw new ProductIdNotInCartException("Cart with id "+cart.getCartId()+" Not Found"); //if the cart Id is not available in cart , it will return exception
		} else {
			Cart cartItems = currentCart.get();
			cartItems.setCartId(cart.getCartId());
			cartItems.setQuantity(cart.getQuantity());
			iCartRepository.save(cartItems);
			return cartItems;
		}
	}

	//4. Clear Cart
	@Override
	public Cart removeAllProducts(Cart cart) {
		if (cart != null) {
			iCartRepository.deleteAll();
			return cart;
		} else {
			throw new CartIsAlreadyEmptyException("Cart is already empty"); //if the cart has no products it will return exception	
		}
	}

	//5. View Cart
	@Override
	public List<Cart> viewAllProductsFromCart() {
		List<Cart> cartProducts = iCartRepository.findAll();
		if (cartProducts.isEmpty()) {
			throw new NoProductFoundInCartException("No Products found in Cart"); //if the cart is empty , it will throw exception
		} else 
			return cartProducts;
		}
	}