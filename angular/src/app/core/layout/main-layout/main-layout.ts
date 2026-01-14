import {Component} from '@angular/core';
import {SidePanel} from '../side-panel/side-panel';
import {RouterOutlet} from '@angular/router';
import {Breadcrumbs} from '../breadcumbs/breadcrumbs.component';
import {Footer} from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  imports: [
    SidePanel,
    RouterOutlet,
    Breadcrumbs,
    Footer
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}

