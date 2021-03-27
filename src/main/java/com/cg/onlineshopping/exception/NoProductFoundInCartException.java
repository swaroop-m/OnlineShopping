package com.cg.onlineshopping.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/* @Author: Sajan Kamath V
 * exception1 starts here
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NoProductFoundInCartException extends RuntimeException {
	
	public NoProductFoundInCartException(String msg) {
		super(msg);
	}

}
