import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from 'src/app/service/comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  form: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private router: Router,
              private cService: CommentsService,
              private route: ActivatedRoute ) { 
    this.form = this.formBuilder.group({
      commentBox: ['', [Validators.minLength(2), Validators.maxLength(1500)]]
    });
  }


  ngOnInit(): void {
    
  }

  get controls() { return this.form.controls; }


  submitForm(): void {
    const routeParams = this.route.snapshot.paramMap;
    const placeId = Number(routeParams.get('placeId'));

    if (this.form.valid) {
      this.cService.postCommentsForPlace(this.controls['commentBox'].value, placeId);
    }
    else {
      console.log('Input not verified');
    }
  }

}