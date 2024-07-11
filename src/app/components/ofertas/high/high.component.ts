import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-high',
  standalone: true,
  imports: [],
  templateUrl: './high.component.html',
  styleUrl: './high.component.css'
})
export default class HighComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
