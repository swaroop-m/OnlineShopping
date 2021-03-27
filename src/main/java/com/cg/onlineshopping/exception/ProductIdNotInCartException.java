package com.cg.onlineshopping.exception;
/* @Autor Sajan Kamath V
 * Exception2 code starts here
 */
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ProductIdNotInCartException extends RuntimeException {
	
	public ProductIdNotInCartException(String msg) {
		super(msg);
	}

}
