package com.example.groupproject.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;

//import javax.validation.constraints.NotNull;

@Entity
@Table (name = "posts")
public class Post {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 @Column(name = "post_id")
	 private Long id;
	 
	 private String title;
	 
	 public Long getPostId() {
		return id;
	 }
	 public void setPostId(Long id) {
		this.id = id;
	 }	
	 
	 public String getTitle() {
		return title;
	 }
	
	 public void setTitle(String title) {
		this.title = title;
	 }
	 
}