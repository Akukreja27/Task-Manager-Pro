import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
 { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetailComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'tasks' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
