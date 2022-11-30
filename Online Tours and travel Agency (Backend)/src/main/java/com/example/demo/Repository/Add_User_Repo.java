package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.example.demo.BankModel.Add_User_Class;

public interface Add_User_Repo extends ReactiveMongoRepository<Add_User_Class, String>{
}
