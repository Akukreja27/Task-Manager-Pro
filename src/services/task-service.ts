import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any[]>(`${this.apiUrl}?_limit=10`).pipe(
      delay(300),
      catchError(this.handleError)
    );
  }

  getTaskById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addTask(task: any) {
    return this.http.post<any>(this.apiUrl, task).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong. Please try again.'));
  }
}
