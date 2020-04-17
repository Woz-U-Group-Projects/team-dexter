package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.MySQLUserDetailsService;
import com.example.groupproject.models.User;
import com.example.groupproject.models.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	MySQLUserDetailsService userServices;
	
	//Finds all users
    @GetMapping()
    public List<User> getMessages() {
        List<User> foundUsers = userRepository.findAll();
        return foundUsers;
    }
	
	//Find User by Id
	 @GetMapping("/{id}")
	 public ResponseEntity<User> getUser(@PathVariable("id") Long id) {
		 User foundUser = userRepository.findById(id).orElse(null);
	     if(foundUser == null) {
	    	 return ResponseEntity.notFound().header("User","No user was found with that id").build();
	     }
	     return ResponseEntity.ok(foundUser);
	 }
	 
	 @PostMapping("/signup")
	 public void postUser(@RequestBody User newUser) {
		 userServices.Save(newUser);
	 }
	 
	 @DeleteMapping("/{id}")
	 public ResponseEntity<User> deleteUser(@PathVariable(value="id") Long id) {
		 User foundUser = userRepository.findById(id).orElse(null);
		 
		 if(foundUser == null) {
			 return ResponseEntity.notFound().header("User", "No user was found with that id").build();
		 }else {
			 userRepository.delete(foundUser);
		 }
		 return ResponseEntity.ok().build();
	 }
}
