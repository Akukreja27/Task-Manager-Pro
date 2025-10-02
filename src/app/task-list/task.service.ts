import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
    { title: 'Task 1', description: 'Complete the Angular tutorial', status: 'Pending' },
    { title: 'Task 2', description: 'Create Task Manager Pro layout', status: 'In Progress' },
    { title: 'Task 3', description: 'Integrate Angular Material', status: 'Completed' }
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    this.tasks.push(task);
  }
}
