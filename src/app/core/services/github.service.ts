import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Repository } from '../../models/repository.model';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly API_URL = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getTrendingRepositories(): Observable<Repository[]> {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD

    const params = new HttpParams()
      .set('q', `created:>${formattedDate}`)
      .set('sort', 'stars')
      .set('order', 'desc')
      .set('per_page', 30);

    return this.http.get<any>(this.API_URL, { params }).pipe(
      map((response) => response.items as Repository[]),
      catchError((error) => {
        console.error('GitHub API Error:', error);
        return throwError(() => error);
      })
    );
  }
}
