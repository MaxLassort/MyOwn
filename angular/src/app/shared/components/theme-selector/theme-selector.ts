import {Component, OnInit, signal} from '@angular/core';
import {Theme} from '../../../core/enums/theme.enum';

@Component({
  selector: 'app-theme-selector',
  imports: [],
  templateUrl: './theme-selector.html'
})
export class ThemeSelector implements OnInit{
  currentTheme = signal<Theme>(Theme.LIGHT);
  protected readonly Theme = Theme;

  ngOnInit() {
    const savedTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT;
    this.setTheme(savedTheme);
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    document.documentElement.dataset['theme'] = theme;
    localStorage.setItem('theme', theme);
  }
}
