import {Component, input} from '@angular/core';

@Component({
  selector: 'app-containter',
  imports: [],
  templateUrl: './containter.html',
})
export class Containter {

  width = input<string | undefined>(undefined);
  height = input<string | undefined>(undefined);

}
