package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.backend.Comment.Comment;
import java.util.List;
@RestController

public class RegistrationController {
  @Autowired
    private RegistrationService service;
@PostMapping("/register")
@CrossOrigin(origins ="http://localhost")
  public Users registerUser(@RequestBody Users user) throws Exception{
      String tempEmailId = user .getEmailId();
      if (tempEmailId != null && !"".equals(tempEmailId)) {
          Users userobj = service.fetcUserByEmailId(tempEmailId);
          if(userobj!=null){
              throw new Exception("user with"+tempEmailId+"is already registered");
          }
      }
      Users userObj = null;
      userObj = service.saveUser(user);
      return userObj;
  }
  @PostMapping("/login")
  @CrossOrigin(origins ="http://localhost")
  public Users loginUser(@RequestBody Users user) throws Exception{
    String tempEmailId = user.getEmailId();
    String tempPass = user.getPassword();
    Users userobj = null;
    if(tempEmailId != null && tempPass != null){
        userobj= service.fetchUserByEmailAndPassword(tempEmailId,tempPass);
    }
    if(userobj == null){
        throw new Exception("i didn't find you in database");
    }
    return userobj;
  }

    @GetMapping("/{userId}")
    @CrossOrigin(origins ="http://localhost")
    public Users getUserById(@PathVariable int userId) {
        // Assuming you have a method in your UserService to retrieve user information by ID
      return service.getUserById(userId);
    }
    @GetMapping("/{userId}/comments")
    @CrossOrigin(origins ="http://localhost")
    public List<Comment> getAllUserComments(@PathVariable("userId") int userId) {
        return service.getUserComments(userId);
    }


}
