package com.example.demo.Bank_Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.BankModel.Add_User_Class;
import com.example.demo.BankModel.Deposit_Class;
import com.example.demo.BankModel.Transfer_Class;
import com.example.demo.BankModel.Withdraw_Class;
import com.example.demo.Repository.Add_User_Repo;
import com.example.demo.Repository.Deposit_Repository;
import com.example.demo.Repository.Transfer_Repository;
import com.example.demo.Repository.Withdraw_Repository;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/transaction")
@CrossOrigin("http://192.168.84.236:8085")
public class Transaction_Controller {
	@Autowired
	private Deposit_Repository depositrepo;

	@Autowired
	private Withdraw_Repository withdrawrepo;

	@Autowired
	private Transfer_Repository transferrepo;

	@Autowired
	private Add_User_Repo userrepo;
//
//	@GetMapping("/deposit/Amount:{amount}/AccountNo:{accountNo}/EnterPin:{pin}")
//	public Mono<Deposit_Class> depositamount(@PathVariable int amount, @PathVariable String email,
//			@PathVariable int pin) {
//
//		userrepo.findAll().filter(user -> user.getAccountNo().equals(email)).doOnNext(user -> {
//			if (user.getPin() == pin) {
//				user.setBalance(user.getBalance() + amount);
//				System.out.println(user);
//			} else {
//				System.out.println("please check you pin");
//			}
//
//		}).flatMap(userrepo::save).blockFirst();
//
//		return depositrepo.save(new Deposit_Class(email, amount, amount + " deposited successfully"));
//
//	}
//	
//	


//	@GetMapping("/withdraw/EnterAmount:{amount}/AccNo:{accountNo}/Pin:{pin}")
//	public Mono<Withdraw_Class> withdrawamount(@PathVariable int amount, @PathVariable String accountNo,
//			@PathVariable int pin) {
//		userrepo.findAll().filter(user -> user.getAccountNo().equals(accountNo)).doOnNext(user -> {
//			if (user.getPin() == pin) {
//				user.setBalance(user.getBalance() - amount);
//				System.out.println(user);
//			} else {
//				System.out.println("You Enter Wrong Pin");
//			}
//		}).flatMap(userrepo::save).blockFirst();
//
//		return withdrawrepo.save(new Withdraw_Class(accountNo, amount, amount + " withdraw successfully"));
//
//	}

//	@GetMapping("/transfer/Amount:{amount}/YourName:{name}/ReceiverAccNo:{accountNo}")
//	public Mono<Transfer_Class> transfermoney(@PathVariable int amount, @PathVariable String name,
//			@PathVariable String accountNo) {
//
//		userrepo.findAll().filter(user -> user.getName().equals(name)).doOnNext(user -> {
//			user.setBalance(user.getBalance() - amount);
//			System.out.println(user);
//		}).flatMap(userrepo::save).blockFirst();
//
//		userrepo.findAll().filter(user -> user.getAccountNo().equals(accountNo)).doOnNext(user -> {
//			user.setBalance(user.getBalance() + amount);
//			System.out.println(user);
//		}).flatMap(userrepo::save).blockFirst();
//
//		return transferrepo.save(new Transfer_Class(accountNo, amount,
//				amount + " transferred successfully to the account " + accountNo));
//
//	}
}
