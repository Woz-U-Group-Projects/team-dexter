package com.example.groupproject.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "post")
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String postMessage;
  

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getPostMessage() {
    return this.postMessage;
  }

  public void setPostMessage(String postMessage) {
    this.postMessage = postMessage;
  }

 

}