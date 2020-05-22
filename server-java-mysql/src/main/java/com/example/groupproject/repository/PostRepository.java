package com.example.groupproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.groupproject.models.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

}
