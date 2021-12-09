import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Manager';

  constructor() {}

  // Life cycle method
  ngOnInit(): void {}

  // Add method to toggle add task
  toggleAddTask() {
    console.log('Toggled!'); 
  }
}
