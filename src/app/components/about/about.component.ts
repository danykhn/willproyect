import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
