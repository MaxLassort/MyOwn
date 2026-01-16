import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab);
  }
}
