import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentListService } from './comment-list.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  public comments: Array<any>;

  constructor(public commentService: CommentListService,
              public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => this.getCommentList(params.id)
    );
  }

  public getCommentList(postId: number) {
    this.commentService.getCommentList(postId)
      .subscribe(
        data => {
          this.comments = data.items;
        },
        error => console.error(error)
      );
  }

}
