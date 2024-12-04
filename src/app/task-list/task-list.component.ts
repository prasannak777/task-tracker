import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskComponent,CommonModule],
  standalone: true,
})
export class TaskListComponent {
  @Input() tasks: { title: string, description: string, completed: boolean }[] = [];

  ngOnInit() {
    if (this.tasks.length === 0) {
      this.tasks = [
        { title: 'Learn Angular', description: 'Complete the Angular tutorial.', completed: false },
        { title: 'Write Tests', description: 'Add test cases to your project.', completed: true },
        { title: 'Deploy App', description: 'Deploy the task tracker app to the server.', completed: false }
      ];
    }
  }
}

