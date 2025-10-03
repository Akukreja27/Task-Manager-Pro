import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-detail',
  standalone:false,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: any;
  isLoading = true;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchTask(id);
      }
    });
  }

  fetchTask(id: string) {
    this.isLoading = true;
    this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe({
      next: (data) => {
        this.task = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load task details!';
        this.isLoading = false;
      }
    });
  }
}
