import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id).subscribe({
      next: (data) => this.task = data,
      error: (err) => console.error(err)
    });
  }
}
