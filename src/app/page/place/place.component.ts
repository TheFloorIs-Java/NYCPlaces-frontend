import { Component, Input, OnInit } from '@angular/core';
import { Place } from 'src/app/Model/Place';
import { PlaceService } from 'src/app/service/place.service';
import { Comment } from 'src/app/Model/Comment';
import { CommentsService } from 'src/app/service/comments.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  // selectedFile: File = null;
  // onUpload(){

  // }
  // onFileSelected(event: any){
  //   this.selectedFile = <File> event.target.files[0];
  
  places: Array<Place> = [];


  constructor(private http: HttpClient, private pservice: PlaceService, private cservive: CommentsService) {}

  ngOnInit(): void {
      this.pservice.getAllPlaces().subscribe(data =>{
         this.places= data; 
         console.log(this.places)
      });

  }

}
