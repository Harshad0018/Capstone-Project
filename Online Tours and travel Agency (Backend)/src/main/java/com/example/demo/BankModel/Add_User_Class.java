	package com.example.demo.BankModel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection ="User Details")
public class Add_User_Class {
	
	@Id
	private String custId;
	private int pin;
	private String name;
	private String email;
//	private int balance;
	
	public static boolean existsById(int custId2) {
		// TODO Auto-generated method stub
		return false;
	}

	
	


}
