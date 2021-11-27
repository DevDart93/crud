import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: '';

  constructor( public http: HttpClient ) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
