package com.cg.onlineshopping.exception;
/*
 * @Author: Safiya Seher
 * Code starts here
 */

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
/**
 * To check if a user wants to follow another user if, he/she is a user or not
 *
 */
public class NotAUserException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1945312844692976653L;

	public NotAUserException(String message) {
		super(message);
	}
	//Code ends here
}