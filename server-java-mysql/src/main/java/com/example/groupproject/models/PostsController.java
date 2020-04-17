package com.example.groupproject.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
public class PostsController {
	 @GetMapping()
	  public ResponseEntity<List<String>> getPosts() {
	    List<String> names = new ArrayList<String>();
	    names.add("First");
	    names.add("Second");
	    names.add("Third");
	    return ResponseEntity.ok(names);
	  }
}
