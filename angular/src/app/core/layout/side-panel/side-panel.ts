import { Component, signal } from '@angular/core';
import {ThemeSelector} from '../../../shared/components/theme-selector/theme-selector';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    ThemeSelector
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
