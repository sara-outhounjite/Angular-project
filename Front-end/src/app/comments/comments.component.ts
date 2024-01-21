// comments.component.ts
import { Component, OnInit } from '@angular/core';
import { CommentService } from './Service/CommentService';
import { Comment } from './Model/Comment';
import { HttpClient } from '@angular/common/http';
import { Users } from '../Users';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments:Comment[]=[];
 comment = new Comment();
 msg='';
 obj!:Users;
 private apiUrl = 'http://localhost:8090';

  constructor(private commentService: CommentService,private http:HttpClient,private route: ActivatedRoute ) {}

  ngOnInit() {
    // Fetch user information when the component initializes
    const userId = this.route.snapshot.paramMap.get('userId');
    this.http.get<any[]>(`${this.apiUrl}/comments`).subscribe(
      (comments) => {
        this.comments = comments;
        console.log("here",this.comments)
      },
      (error) => {
        console.log('Error fetching comments', error);
      }
    );
     
    this.http.get<any>(`${this.apiUrl}/${userId}`).subscribe(
      (data) => {
        this.obj = data;
       
      },
      (error) => {
        console.log('Error fetching user info', error);
      }
    );
  
  }
  addComment(){
    this.comment.user = this.obj;
    this.commentService.addComment(this.comment).subscribe(
      data => {console.log("Comment recieved");
      console.log(data)
     this.comments.push(data)
     console.log(this.comments)

     
      this.msg="successful!";
     },
      error => {console.log("exception"),
      this.msg="try again";
   }
      )
  }}
