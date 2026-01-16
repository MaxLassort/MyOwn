import {Component, input} from '@angular/core';

@Component({
  selector: 'app-tech-badge',
  imports: [],
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
})
export class TechBadge {
  label = input.required<string>();
}
