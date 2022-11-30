package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.example.demo.BankModel.Contact_Request;


public interface contact_us_repo extends ReactiveMongoRepository<Contact_Request, String>{
}