import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  task = {
    title: '',
    description: '',
    status: 'pending'
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newTask = {
        title: this.task.title,
        description: this.task.description,
        status: this.task.status,
        completed: this.task.status === 'completed'
      };

      this.taskService.addTask(newTask).subscribe({
        next: () => {
          this.snackBar.open('Task added successfully!', 'Close', {
            duration: 2500,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.router.navigate(['/tasks']);
        },
        error: () => {
          this.snackBar.open('Failed to add task. Please try again.', 'Close', {
            duration: 2500,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      });
    }
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }
}
