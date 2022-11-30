package com.example.demo.BankModel;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Withdraw Details")
public class Withdraw_Class {

	private String AccountNo;
	private int amount;
	private String status;

}
