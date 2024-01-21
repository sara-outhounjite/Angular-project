package com.example.backend;

import com.example.backend.Comment.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
public interface RegistrationRepo extends JpaRepository<Users,Integer> {
    public Users findByEmailId(String emailId);
    public Users findByEmailIdAndPassword(String emailId,String password);
    public Users findById(int id);

}
