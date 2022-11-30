package com.example.demo.Bank_Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.BankModel.Add_User_Class;
import com.example.demo.BankModel.Contact_Request;
import com.example.demo.BankModel.addReview;
import com.example.demo.BankModel.book_package;
import com.example.demo.Repository.Add_User_Repo;
import com.example.demo.Repository.addReviewRepo;
import com.example.demo.Repository.book_package_repo;
import com.example.demo.Repository.contact_us_repo;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
	
@RestController
@RequestMapping("/User")
@CrossOrigin("http://192.168.212.236:8085")
public class Add_User_Controller {
	@Autowired
	private Add_User_Repo USER_Repo;
	
	@Autowired
	private book_package_repo BOOK_Repo;
	@Autowired
	private addReviewRepo review_repo;
	@Autowired
	private contact_us_repo contactRepo ;
	
	//Create New Account
	@PostMapping("/createAccount")
	public Mono<Add_User_Class> createAccount(@RequestBody Add_User_Class user) {
		return USER_Repo.save(user);
	}
	
	@PostMapping("/bookpackage")
	public Mono<book_package> bookPackage(@RequestBody book_package obj) {
		return BOOK_Repo.save(obj);
	}
	
	@PostMapping("/addReview")
	public Mono<addReview> addreviews(@RequestBody addReview obj) {
		return review_repo.save(obj);
	}
	
	@PostMapping("/contactDetails")
	public Mono<Contact_Request> contactDetails(@RequestBody Contact_Request obj) {
		return contactRepo.save(obj);
	}
//	@PutMapping("/updateAccount/{custId}")
//	public Mono<Add_User_Class> updateAccount(@PathVariable int custId, @RequestBody Add_User_Class user) {
//		return USER_Repo.findById(custId).doOnNext(b -> {
//			b.setName(Add_User_Class.);
//			b.setAcc_HolderName(Add_User_Class.getAcc_HolderName());
//		}).flatMap(USER_Repo::save);
//	}

	@GetMapping("/ViewDetails/{custId}")
	public Mono<Add_User_Class> getbalance(@PathVariable String custId) {
		return USER_Repo.findById(custId);
	}
	
	@GetMapping("/ViewPackages/{customerId}")
	public Flux<book_package> getpackage(@PathVariable String customerId) {
		return BOOK_Repo.findAll();		
		
//		return BOOK_Repo.findAll().filter(user->user.getCustomerId()==customerId);
	}
	
	@GetMapping("/ViewReview")
	public Flux<addReview> getReview() {
		return review_repo.findAll();
		
	}

	@DeleteMapping("/deleteAccountById/AccountId:{custId}")
	public Mono<Void> deletebyId(@PathVariable String custId) {
		return USER_Repo.deleteById(custId);

	}
	@DeleteMapping("/cancelBookbyId/{_id}")
	public Mono<Void> deleteby_Id(@PathVariable String _id) {
		return BOOK_Repo.deleteById(_id);

	}
}
