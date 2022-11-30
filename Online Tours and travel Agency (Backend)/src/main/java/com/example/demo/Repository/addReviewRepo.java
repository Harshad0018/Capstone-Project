package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.example.demo.BankModel.addReview;

public interface addReviewRepo extends ReactiveMongoRepository<addReview, String>{
}