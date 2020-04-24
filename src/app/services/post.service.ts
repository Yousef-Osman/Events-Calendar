import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  rootUrl='https://jsonplaceholder.typicode.com/posts';
  posts:any;

  constructor(private httpClient:HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.rootUrl);
  }
}
