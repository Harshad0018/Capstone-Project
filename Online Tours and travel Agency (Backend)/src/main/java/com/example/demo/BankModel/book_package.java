package com.example.demo.BankModel;

//import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

	@Data
	@Document(collection ="Booking Details")
	public class book_package {
		
		
		private String customerId;
		private int days;
		private String city;
		private int price;
		private String arrivaldate;
		private int members;
		private String _id;
		private String mode;

		public static boolean existsById(int custId2) {
			// TODO Auto-generated method stub
			return false;
		}
		


	}
