import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone:false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .subscribe({
        next: (data) => {
          this.tasks = data;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Failed to fetch tasks!';
          this.isLoading = false;
        }
      });
  }
}
