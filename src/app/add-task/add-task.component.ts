import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../task-list/task.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
 

  constructor(private taskService: TasksService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskService.addTask(form.value);
      alert('Task saved successfully!');
      form.reset(); 
    }
  }
}
