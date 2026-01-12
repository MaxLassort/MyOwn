import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  templateUrl: './side-panel.html'
})
export class SidePanel {
  isOpen = signal(false);
  toggle() {
    this.isOpen.update((isOpen) => !isOpen);
  }
}
