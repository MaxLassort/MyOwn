import {Component, signal} from '@angular/core';
import {ThemeSelector} from '../../../shared/components/theme-selector/theme-selector';
import {Navigation} from '../navigation/navigation';

@Component({
  selector: 'app-side-panel',
  imports: [
    ThemeSelector,
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
