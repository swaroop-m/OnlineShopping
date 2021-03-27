package com.cg.onlineshopping.exception;
/*
 * @Author: Swaroop M
 * Code starts here
 */
import java.util.Date;

/**
 * If the exception is thrown, then what we want to get in response 
 *
 */
public class ExceptionResponse {

	private int statusCode;
	private Date timeStamp;
	private String message;
	private String details;

	public ExceptionResponse(int statusCode, Date timeStamp, String message, String details) {
		super();
		this.statusCode=statusCode;
		this.timeStamp = timeStamp;
		this.message = message;
		this.details = details;
	}


	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public Date getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	//COde ends here

}