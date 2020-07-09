import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public postList: Array<any>;

  constructor(
    public postService: PostService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    return this.postService.getPostList().subscribe(
      res => {
        this.postList = res.items;
      },
      error => { console.log(error); },
      () => { }
    );
  }

}
