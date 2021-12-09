import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  // Initialize the task as input
  @Input() task: Task;

  // Output the onDelete event
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  // Output the onToggle event
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  // Set the icon as property
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task);
  }
}
