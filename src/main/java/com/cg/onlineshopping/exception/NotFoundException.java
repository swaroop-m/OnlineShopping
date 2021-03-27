package com.cg.onlineshopping.exception;
/**
 * @author Swaroop M
 * Code starts here
 */
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
/**
 * To check whether the the data entered by user exists or not
 *
 */
public class NotFoundException extends RuntimeException{
	private static final long serialVersionUID = -6997518906837445699L;

	public NotFoundException(String message) {
		super(message);
	
	}
	
}
/**
 * @author Swaroop M
 * Code ends here
 */