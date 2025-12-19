import {Component} from '@angular/core';
import {IconButtonDirective} from '../../shared/directives/icon-button.directive';
import {RouterLink} from '@angular/router';
import {RouteEnum} from '../../route.enum';

@Component({
  selector: 'app-home',
  imports: [
    IconButtonDirective,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  protected readonly RouteEnum = RouteEnum;
}
