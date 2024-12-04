import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  imports: [TaskListComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})

export class AppComponent {
  
  tasks: { title: string; description: string; completed: boolean }[] = [];

  onTaskAdded(task: { title: string; description: string; completed: boolean }) {
    this.tasks.push(task);
  }
}
