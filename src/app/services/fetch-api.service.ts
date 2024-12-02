import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, Observable, of } from 'rxjs';
import { PostsDataObject } from '../components/api/interfaces/posts-data';
import { UserName } from '../components/api/interfaces/user-name';

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

  getUserName(): Observable<UserName> {
    return of({ firstName: 'John', lastName: 'Doe' });
  }
}
