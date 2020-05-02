package com.example.groupproject.controllers;

//import java.io.File;
//import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;

import com.example.groupproject.models.Post;
import com.example.groupproject.models.PostRepository;

@RestController
@RequestMapping("/api/posts")
public class PostController {
	@Autowired
	PostRepository postRepository;
	
	@GetMapping()
	public List<Post> getPosts() {
		return postRepository.findAll();
	}
	
	@PostMapping("/api/upload")
	public Post addPost(@RequestBody Post post) {
		return postRepository.save(post);
	}
	
	@PutMapping("/{id}/update")
	public Post updatePost(@PathVariable Long id, @RequestBody Post post) {
		Post foundPost = postRepository.findById(id).orElse(null);
		if(foundPost != null) {
			foundPost.setTitle(post.getTitle());
			postRepository.save(foundPost);
			return foundPost;
		}
		return null;
	}
	
	@DeleteMapping("/{id}/delete")
	public void deletePost(@PathVariable Long id) {
		postRepository.deleteById(id);
	}
	
}
 