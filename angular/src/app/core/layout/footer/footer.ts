import { Component } from '@angular/core';
import {ThemeSelector} from '../../../shared/components/theme-selector/theme-selector';

@Component({
  selector: 'app-footer',
  imports: [
    ThemeSelector
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
