package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.BankModel.Withdraw_Class;

@Repository
public interface Withdraw_Repository extends ReactiveMongoRepository<Withdraw_Class, Integer> {

}
