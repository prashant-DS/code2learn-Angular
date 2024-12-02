import { Component } from '@angular/core';
import { FetchApiService } from '../../services/fetch-api.service';
import { PostsDataObject } from './interfaces/posts-data';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { UserName } from './interfaces/user-name';

@Component({
  selector: 'app-api',
  imports: [NgIf, AsyncPipe, JsonPipe],
  providers: [FetchApiService],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss',
})
export class ApiComponent {
  data: string[] = [];
  posts: PostsDataObject[] = [];
  userName: Observable<UserName> | undefined;
  constructor(private fetchApiService: FetchApiService) {
    this.data = this.fetchApiService.getData();
  }

  ngOnInit() {
    this.userName = this.fetchApiService.getUserName();
    this.fetchApiService.getPosts().subscribe({
      next: (response: PostsDataObject[]) => {
        this.posts = response;
      },
      error: (error: Error) => {
        console.error('Error:', error);
      },
    });
  }
}
