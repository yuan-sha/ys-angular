import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post: any = {};

  constructor(public postDetailService: PostService,
              public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      params => this.getPost()
    );
  }

  public getPost() {
    this.postDetailService
      .getPost()
      .subscribe(
        data => this.post = data,
        error => console.error(error)
      );
  }

}
