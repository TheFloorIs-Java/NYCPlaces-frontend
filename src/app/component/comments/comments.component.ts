import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/Model/Comment';
import { Place } from 'src/app/Model/Place';
import { CommentsService } from 'src/app/service/comments.service';
import { PlaceService } from 'src/app/service/place.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  
  @Input()
  placeComments: Array<Comment> = [];


  constructor(private http: HttpClient, private cservice: CommentsService, private pservice: PlaceService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const placeId = Number(routeParams.get('placeId'));
  
    this.cservice.getCommentsForPlace(placeId).subscribe(data => this.placeComments = data);
   
  }
}
