import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/consts/posts';
import { IPosts } from 'src/app/interface/postInterface';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsArray : Array<IPosts> = posts;
  
  constructor() { }

  ngOnInit(): void {
  }

}
