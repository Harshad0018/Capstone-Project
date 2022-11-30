package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.BankModel.Transfer_Class;

@Repository
public interface Transfer_Repository extends ReactiveMongoRepository<Transfer_Class, Integer>{
}
