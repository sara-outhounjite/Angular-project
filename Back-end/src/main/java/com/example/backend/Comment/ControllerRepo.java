package com.example.backend.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
public interface ControllerRepo extends JpaRepository<Comment,Integer> {

    @Query("SELECT c FROM Comment c")
    public List<Comment> getAllComments();
}
