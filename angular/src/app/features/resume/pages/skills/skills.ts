import {Component} from '@angular/core';
import {TechSkillCard, techSkills} from '../../../../core/models/skills.model';
import {SkillCard} from './components/skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [
    SkillCard
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
 cards: TechSkillCard[] = techSkills;
}
