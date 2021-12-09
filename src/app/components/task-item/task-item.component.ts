import { Component, OnInit, Input } from '@angular/core';
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

  // Set the icon as property
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}
}
