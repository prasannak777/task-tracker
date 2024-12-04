import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: { title: string; description: string; completed: boolean } = {
    title: '',
    description: '',
    completed: false
  };
}
