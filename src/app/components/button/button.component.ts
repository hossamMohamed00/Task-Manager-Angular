import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // Accepts inputs
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // Handles events
  onClick() {
    // Send the event
    this.btnClick.emit();
  }
}
