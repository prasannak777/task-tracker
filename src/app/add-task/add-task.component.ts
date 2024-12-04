import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  imports: [FormsModule, ReactiveFormsModule]
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<{ title: string, description: string, completed: boolean }>();
  task = { title: '', description: '', completed: false };
  title= '';
  description = '';

  onAddTask() {
    console.log("chk");
    this.taskAdded.emit(this.task); 
    this.task = { title: '', description: '', completed: false }; 
  }
}
