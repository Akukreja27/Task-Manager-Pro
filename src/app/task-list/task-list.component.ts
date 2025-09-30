import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
 tasks: any[] = [
    { title: 'Task 1', description: 'Complete the Angular tutorial' },
    { title: 'Task 2', description: 'Create Task Manager Pro layout' },
    { title: 'Task 3', description: 'Integrate Angular Material' }
  ];
}
