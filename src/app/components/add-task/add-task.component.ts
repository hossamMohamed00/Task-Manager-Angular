import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  // Setup properties for the form
  text: string;
  day: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Handles submit events
  onSubmit() {
    if (!this.text) {
      alert('Please enter task description 😒');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // TODO: Emit event
    this.onAddTask.emit(newTask);

    // Clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
