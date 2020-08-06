import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostHeadlingComponent } from './post-headling/post-headling.component';

import {PaginatorModule} from 'primeng/paginator';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';

@NgModule({
  declarations: [PostListComponent, PostHeadlingComponent, PostDetailMainComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    PaginatorModule
  ]
})
export class PostModule { }
