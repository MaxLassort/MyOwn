import {Component, input} from '@angular/core';
import {TechSkillCard} from '../../../../../../core/models/skills.model';
import {Containter} from '../../../../../../shared/components/containter/containter';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-skill-card',
  imports: [
    Containter,
    FaIconComponent
  ],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
    card= input.required<TechSkillCard>();
}
