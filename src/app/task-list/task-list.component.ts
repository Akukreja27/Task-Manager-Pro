import { Component, OnInit } from '@angular/core';
import { TasksService } from './task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: any[] = [];

  constructor(private taskService: TasksService) {}

   ngOnInit() {
     this.tasks = this.taskService.getTasks();
   }
   
   
}
