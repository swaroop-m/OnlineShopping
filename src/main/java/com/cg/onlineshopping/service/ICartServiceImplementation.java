package com.cg.onlineshopping.service;

/*author:Sajan Kamath V 
 * Service Implementation Code starts here
 */
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.onlineshopping.entities.Cart;
import com.cg.onlineshopping.entities.CartItem;
import com.cg.onlineshopping.exception.CartIsAlreadyEmptyException;
import com.cg.onlineshopping.exception.NoProductFoundInCartException;
import com.cg.onlineshopping.exception.NotFoundException;
import com.cg.onlineshopping.exception.ProductIdNotInCartException;
import com.cg.onlineshopping.repository.ICartItemRepository;
import com.cg.onlineshopping.repository.ICartRepository;

@Service
public class ICartServiceImplementation implements ICartService { // Service Implementation

	@Autowired
	ICartRepository iCartRepository;

	@Autowired
	ICartItemRepository iCartItemRepository;

	// 1. Add Product To Cart
	@Override
	public Cart addProductToCart(Cart cart) {
		iCartRepository.save(cart);
		return cart;
	}

	// 2.Remove product from cart by product Id
	@Override
	public CartItem removeProductFromCart(int id) {
		Optional<CartItem> cartItem = iCartItemRepository.findById(id);
		if(cartItem.isPresent()) {
		CartItem deletedItem = cartItem.get();
		iCartItemRepository.deleteById(id);
		return deletedItem;
		}
		else
		{
			throw new ProductIdNotInCartException("The Product with id "+cartItem.get()+" doesnt exist in cart");
		}
	}

	// 3.Update Product quantity in cart
	@Override
	public CartItem updateProductQuantity(CartItem cartItem) {
		Optional<CartItem> existing = iCartItemRepository.findById(cartItem.getId());

		if (existing.isEmpty()) {
			throw new NotFoundException("Id" + cartItem.getId() + "  does not exist");
		} else {
			CartItem existingProduct = existing.get();
			if (cartItem.getQuantity() != null) {
				existingProduct.setQuantity(cartItem.getQuantity());
			} 
			iCartItemRepository.save(existingProduct);
				return existingProduct;
			}
		}
	

	// 4. Clear Cart
	@Override
	public Cart removeAllProducts(Cart cart) {
		if (cart != null) {
			iCartRepository.deleteAll();
			return cart;
		} else {
			throw new CartIsAlreadyEmptyException("Cart is already empty"); // if the cart has no products it will
			// return exception
		}
	}

	// 5. View Cart
	@Override 
	public List<Cart> viewAllProductsFromCart() {
		List<Cart> cartProducts = iCartRepository.findAll();
		if (cartProducts.isEmpty()) {
			throw new NoProductFoundInCartException("No Products found in Cart"); // if the cart is empty , it will
			// throw exception
		} else
			return cartProducts;
	}
}