package com.cg.onlineshopping.exception;

/**
 * @author Swaroop M
 * Code starts here
 */

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class AlreadyExistsException extends RuntimeException{

	private static final long serialVersionUID = -4911977545384853079L;

	public AlreadyExistsException(String message) {
		super(message);

	}

}
/**
 * @author Swaroop M
 * Code ends here
 */