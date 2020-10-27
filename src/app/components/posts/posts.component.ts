import { Component, OnDestroy, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { IPosts, IPost } from './post.interface';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  allPosts: any;
  sub: Subscription;
  user: SocialUser;
  loggedIn: boolean;
  constructor(private postService: PostsService, private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    this.loadAllPosts();
  }

  loadAllPosts() {
    this.sub = this.postService.getAllPosts()
      .subscribe((res) => {
        this.allPosts = res.posts;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
