import { Routes } from '@angular/router';
import {Game} from './features/game/components/game/game.component';
import {App} from './app';

export const routes: Routes = [
  { path: 'game', component: Game },
  { path: '', component: App },
  { path: '**', redirectTo: '' }

];
