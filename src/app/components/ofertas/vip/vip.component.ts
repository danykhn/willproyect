import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vip',
  standalone: true,
  imports: [],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.css'
})
export default class VipComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
