import {Component, input} from '@angular/core';
import {TechBadge} from "../tech-badge/tech-badge";
import {Experience} from '../../../../../../core/models/experience.model';

@Component({
  selector: 'app-experience-item',
  imports: [
    TechBadge
  ],
  templateUrl: './experience-item.component.html',
  styles: [`ó
    :host {
      display: contents;
    }
  `]
})
export class ExperienceItem {
  experience = input.required<Experience>()

}
