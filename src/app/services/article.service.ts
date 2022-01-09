import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  configUrl = 'assets/photos/data.json';
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get<any>(this.configUrl);
  }
}
