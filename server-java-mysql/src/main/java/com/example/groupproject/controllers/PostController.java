package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Post;
import com.example.groupproject.repository.PostRepository;

@RestController
@RequestMapping("/posts")
public class PostController {

  @Autowired
  PostRepository postRepository;

  @GetMapping()
  public List<Post> getPosts() {
    return postRepository.findAll();
  }

  @PostMapping()
  public Post addPost(@RequestBody Post post) {
    return postRepository.save(post);
  }

  @DeleteMapping("/{id}")
  public void deletePost(@PathVariable Long id) {
    postRepository.deleteById(id);
  }

  @PutMapping("/{id}")
  public Post updateProject(@PathVariable Long id, @RequestBody Post post) {
    Post foundPost = postRepository.findById(id).orElse(null);
    if (foundPost != null) {
    	foundPost.setPostMessage(post.getPostMessage());
    	//foundPost.setComplete(post.getComplete());
      postRepository.save(foundPost);
      return foundPost;
    }
    return null;
  }

}

