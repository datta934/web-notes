import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { IPosts, IPost } from './post.interface';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostsService {
  baseUrl = environment.baseUrl + '/posts';
  constructor(private http: HttpClient) { }


  getAllPosts() {
    return this.http.get<IPosts<IPost>>(`${this.baseUrl}`);
  }
}
