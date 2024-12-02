import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsDataObject } from '../components/api/interfaces/posts-data';

@Injectable({
  providedIn: 'root',
})
export class FetchApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getData() {
    return ['data 1', 'data 2', 'data 3'];
  }

  getPosts(): Observable<PostsDataObject[]> {
    return this.http.get<PostsDataObject[]>(this.apiUrl);
  }
}
