import { Component,OnInit } from '@angular/core';
import { Comment } from '../comments/Model/Comment';
import { CommentService } from '../comments/Service/CommentService';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-the-comments',
  templateUrl: './the-comments.component.html',
  styleUrl: './the-comments.component.css'
})
export class TheCommentsComponent implements OnInit {
   comments:Comment[]=[];
  constructor(private service:CommentService,private route:ActivatedRoute,private http:HttpClient){}
 
  private apiUrl = 'http://localhost:8090/addComment'; 
  ngOnInit(){
    const userId = this.route.snapshot.paramMap.get('userId');
    
   this.http.get<any[]>(`${this.apiUrl}/${userId}/comments`).subscribe((comments)=>this.comments=comments)
  }

}
