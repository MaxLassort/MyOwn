import {Routes} from '@angular/router';
import {Game} from './features/game/components/game/game.component';
import {Home} from './features/home/home';
import { RouteEnum } from "./route.enum";

export const routes: Routes = [
  { path: RouteEnum.GAME, component: Game },
  { path: RouteEnum.HOME, component: Home },
  { path: '**', redirectTo: RouteEnum.HOME }

];
