import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Model/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http : HttpClient) { }

  CommentList?: Comment[];

  getCommentsForPlace(Placeid: number): Observable<Comment[]>{
    return this.http.get<Comment[]>("http://localhost:8080/comments/place/"+Placeid);
  }

  postCommentsForPlace(commentInput: string, id: Number): void {
    this.http
      .post<String>('http://localhost:8080/comment/place/'+id, {
        comment: commentInput
      })
      .subscribe((data) => console.log(data));
  }

  
}
