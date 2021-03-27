package com.cg.onlineshopping.exception;
/*
 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
 * Code starts here
 */
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY)
/**
 * For validating if user's entered detail is in specific pattern or not as specified
 *
 */
public class ValidationException extends RuntimeException {

	private static final long serialVersionUID = -5768687558494728078L;

	public ValidationException(String message) {
		super(message);

	}
	/*
	 * @Author: Shrestha Chowdhury (JEEFSI_Uni41)
	 * Code ends here
	 */
}