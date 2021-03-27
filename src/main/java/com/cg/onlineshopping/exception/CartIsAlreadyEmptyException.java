package com.cg.onlineshopping.exception;
/*author:Sajan Kamath V 
 * Exception-2 Code starts here
 */
public class CartIsAlreadyEmptyException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6683699843964477630L;

	public CartIsAlreadyEmptyException(String msg)      
	{
		super(msg);
	}

}
