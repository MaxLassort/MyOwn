import {Routes} from '@angular/router';
import {Game} from './features/game/components/game/game.component';
import {Home} from './features/home/home';
import { RouteEnum } from "./route.enum";
import {MainLayout} from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  { path: RouteEnum.GAME, component: Game },
  { path: RouteEnum.HOME, component: Home },
  { path: RouteEnum.RESUME, component: MainLayout },
  { path: '**', redirectTo: RouteEnum.HOME }

];
