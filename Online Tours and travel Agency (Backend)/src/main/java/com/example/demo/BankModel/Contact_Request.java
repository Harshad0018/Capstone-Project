package com.example.demo.BankModel;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection ="Contact Request")
public class Contact_Request {
	
	
	private String custId;
	private String name;
	private String email;
	private String sub;
	private String msg;
	
	


}