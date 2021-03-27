package com.cg.onlineshopping.exception;
/*
 * @Author: Aishwarya A S
 * Code starts here
 */
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
/**
 * To check if the user is already existing or not
 *
 */
public class DeletionException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2173808124126467274L;

	public DeletionException(String message) {
		super(message);

	}
	//Code ends here
}