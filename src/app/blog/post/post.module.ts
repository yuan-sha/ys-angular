import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostHeadlingComponent } from './post-headling/post-headling.component';
import { CommentListComponent } from '../comment-list/comment-list.component';
import {PaginatorModule} from 'primeng/paginator';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostHeadlingComponent,
    PostDetailMainComponent,
    PostDetailComponent,
    CommentListComponent
  ],
  imports: [
    SharedModule,
    PostRoutingModule,
    PaginatorModule
  ]
})
export class PostModule { }
