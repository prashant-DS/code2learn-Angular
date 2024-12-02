import { Component } from '@angular/core';
import { FetchApiService } from '../../services/fetch-api.service';
import { PostsDataObject } from './interfaces/posts-data';

@Component({
  selector: 'app-api',
  providers: [FetchApiService],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss',
})
export class ApiComponent {
  data: string[] = [];
  posts: PostsDataObject[] = [];

  constructor(private fetchApiService: FetchApiService) {
    this.data = this.fetchApiService.getData();
  }

  ngOnInit() {
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
