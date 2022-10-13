import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './component/comments/comments.component';
import { PlaceComponent } from './page/place/place.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { CommentFormComponent } from './componet/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    PlaceComponent,
    PlaceDetailComponent,
    CommentFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
