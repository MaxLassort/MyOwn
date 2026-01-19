import {Component} from '@angular/core';
import {Experience, EXPERIENCES, TECHNOLOGIES, TechnologyCard,} from '../../../../core/models/experience.model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {ExperienceItem} from './components/experience-item/experience-item.component';
import {NgClass} from '@angular/common';


@Component({
  selector: 'app-experiences',
  imports: [
    ExperienceItem,
    FaIconComponent,
    NgClass
  ],
  templateUrl: './experiences.html'
})
export class Experiences {
  experiences: Experience[] = EXPERIENCES;
  technologies: TechnologyCard[] = TECHNOLOGIES;

}
