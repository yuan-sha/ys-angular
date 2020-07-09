import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostHeadlingComponent } from './post-headling/post-headling.component';


@NgModule({
  declarations: [PostListComponent, PostHeadlingComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
