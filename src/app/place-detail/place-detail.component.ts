import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../Model/Place';
import { PlaceService } from '../service/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pService: PlaceService) { }

  place?: Place;
  placeImage: string = "";

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const placeId = Number(routeParams.get('placeId'));
    
    this.pService.getAPlace(placeId).subscribe(result => this.place = result);

    this.placeImage = "../../assets/images/Place"+placeId+".jpg";
  }

}
