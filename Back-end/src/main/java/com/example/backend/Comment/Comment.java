package com.example.backend.Comment;

import com.example.backend.Users;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String content;
    @ManyToOne

    @JoinColumn(name = "user_id")

    private Users user;

    public Comment(String content, Users user) {
        this.content = content;
        this.user = user;
    }

    public Comment() {
    }

    public int getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public Users getUser() {
        return user;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
