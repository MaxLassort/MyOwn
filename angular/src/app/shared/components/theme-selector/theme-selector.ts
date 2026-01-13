import {Component, inject} from '@angular/core';
import {Theme} from '../../../core/enums/theme.enum';
import {ThemeService} from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-selector',
  imports: [],
  templateUrl: './theme-selector.html'
})
export class ThemeSelector {
  protected readonly Theme = Theme;

  themeService = inject(ThemeService);


  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

}
