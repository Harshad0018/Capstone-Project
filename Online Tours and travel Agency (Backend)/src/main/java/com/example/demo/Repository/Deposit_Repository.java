package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.BankModel.Deposit_Class;

@Repository
public interface Deposit_Repository extends ReactiveMongoRepository<Deposit_Class, Integer> {

	
}
