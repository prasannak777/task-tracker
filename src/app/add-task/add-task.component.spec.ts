import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let taskAddedSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, AddTaskComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;

    taskAddedSpy = spyOn(component.taskAdded, 'emit');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct task when onAddTask is called', () => {
    component.task = { title: 'Task 1', description: 'Description 1', completed: false };
    
    component.onAddTask();
  });

  // it('should reset the task after emitting', () => {
  //   component.task = { title: 'Task 1', description: 'Description 1', completed: false };

  //   component.onAddTask();

  //   expect(component.task.title).toBe('');
  //   expect(component.task.description).toBe('');
  //   expect(component.task.completed).toBe(false);
  // });

  // it('should update the title and description input fields correctly', () => {
  //   const titleInput: DebugElement = fixture.debugElement.query(By.css('input[name="title"]'));
  //   const descriptionInput: DebugElement = fixture.debugElement.query(By.css('input[name="description"]'));

  //   titleInput.nativeElement.value = 'Task 1';
  //   descriptionInput.nativeElement.value = 'Description 1';

  //   titleInput.nativeElement.dispatchEvent(new Event('input'));
  //   descriptionInput.nativeElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();

  //   expect(component.task.title).toBe('Task 1');
  //   expect(component.task.description).toBe('Description 1');
  // });

  // it('should emit task data when submit button is clicked', () => {
  //   component.title = 'Task 1';
  //   component.description = 'Description 1';
    
  //   const button: DebugElement = fixture.debugElement.query(By.css('button'));
  //   button.triggerEventHandler('click', null);

  //   expect(taskAddedSpy).toHaveBeenCalled();
  //   expect(taskAddedSpy).toHaveBeenCalledWith({
  //     title: 'Task 1',
  //     description: 'Description 1',
  //     completed: false
  //   });
  // });
});
