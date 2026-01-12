import {Component} from '@angular/core';
import {SidePanel} from '../side-panel/side-panel';

@Component({
  selector: 'app-main-layout',
  imports: [
    SidePanel
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
