package com.example.demo.BankModel;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection ="View Reviews")
public class addReview {
	
	
	private String name;
	private int rating;
	private String msg;
	


}