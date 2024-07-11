import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-medium',
  standalone: true,
  imports: [],
  templateUrl: './medium.component.html',
  styleUrl: './medium.component.css'
})
export default class MediumComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
