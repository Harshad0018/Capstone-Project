package com.example.demo.Repository;


import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import com.example.demo.BankModel.book_package;

import reactor.core.publisher.Mono;

	public interface book_package_repo extends ReactiveMongoRepository<book_package, String>{



		Mono<book_package> findByCustomerId(String customerId);

	


	}
