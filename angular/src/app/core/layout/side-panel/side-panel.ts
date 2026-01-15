import {Component, signal} from '@angular/core';
import {Navigation} from '../navigation/navigation';

@Component({
  selector: 'app-side-panel',
  imports: [
    Navigation
  ],
  templateUrl: './side-panel.html',
  styleUrl: './side-panel.css',
})
export class SidePanel {

  isOpen = signal(false);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
}
