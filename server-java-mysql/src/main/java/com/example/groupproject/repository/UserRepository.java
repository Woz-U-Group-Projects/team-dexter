package com.example.groupproject.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.groupproject.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);
	
	Optional<User> findByUsernameOrEmail(String username, String email);
	
	Optional<User> findByEmail(String email);
	
	List<User> findByIdIn(List<Long> userIds);
	
	Boolean existsByUsername(String username);
	
	Boolean existsByEmail(String email);
}
