import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-low',
  standalone: true,
  imports: [],
  templateUrl: './low.component.html',
  styleUrl: './low.component.css'
})
export default class LowComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
