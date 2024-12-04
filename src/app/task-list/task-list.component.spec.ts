import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule,TaskListComponent, TaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
  });

  it('should display the tasks', () => {
    component.tasks = [
      { title: 'Task 1', description: 'content of Task 1', completed: true },
      { title: 'Task 1', description: 'content of Task 2', completed: true }];
    fixture.detectChanges(); 

    expect(component.tasks.length).toBe(2);
  });

  it('should not display any tasks if tasks array is empty', () => {
    component.tasks = [];
    fixture.detectChanges(); 

    const taskElements = fixture.nativeElement.querySelectorAll('.task');
    expect(taskElements.length).toBe(0); 
  });

});
