import { Injectable, signal, effect } from '@angular/core';
import {Theme} from '../enums/theme.enum';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Private signal for internal state (encapsulation)
  private readonly _theme = signal<Theme>(Theme.LIGHT);

  // Public read-only signal for components
  readonly theme = this._theme.asReadonly();

  constructor() {
    // Retrieve theme on startup
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this._theme.set(savedTheme);
    }

    effect(() => {
      const theme = this._theme();
      document.documentElement.dataset['theme'] = theme;
      localStorage.setItem('theme', theme);
    });
  }

  setTheme(theme: Theme) {
    this._theme.set(theme);
  }
  isDark(){
    return this._theme() == Theme.DARK;
  }
}
