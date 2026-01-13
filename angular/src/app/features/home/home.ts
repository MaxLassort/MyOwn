import {Component} from '@angular/core';
import {IconButtonDirective} from '../../shared/directives/icon-button.directive';
import {RouterLink} from '@angular/router';
import {RouteEnum} from '../../route.enum';
import {ThemeSelector} from '../../shared/components/theme-selector/theme-selector';

@Component({
  selector: 'app-home',
  imports: [
    IconButtonDirective,
    RouterLink,
    ThemeSelector
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly RouteEnum = RouteEnum;
}
