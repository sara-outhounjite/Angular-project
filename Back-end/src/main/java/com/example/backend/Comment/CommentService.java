package com.example.backend.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private ControllerRepo Repo;

    public CommentService(ControllerRepo repo) {
        this.Repo = repo;
    }



    Comment AddComment(Comment comment){
       return  Repo.save(comment);
    }
    public List<Comment> getAllComments() {
        return Repo.getAllComments();
    }


}
