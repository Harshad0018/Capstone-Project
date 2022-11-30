package com.example.demo.BankModel;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Deposit Details")
public class Deposit_Class {
	private String AccountNo;
	private int amount;
	private String status;
}
