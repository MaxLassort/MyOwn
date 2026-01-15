import {Routes} from '@angular/router';
import {Game} from './features/game/components/game/game.component';
import {Home} from './features/home/home';
import {ResumeRoutesEnum, RouteEnum} from "./route.enum";
import {MainLayout} from './core/layout/main-layout/main-layout';
import {AboutMe} from './features/resume/pages/about-me/about-me';

import {PAGES} from './core/config/pages.config';

export const routes: Routes = [
  {
    path: RouteEnum.GAME,
    component: Game,
    data: { title: PAGES.GAME.filename }
  },
  {
    path: RouteEnum.HOME,
    component: Home,
    data: { title: PAGES.HOME.filename }
  },
  {
    path: RouteEnum.RESUME,
    component: MainLayout,
    children: [
      {
        path: ResumeRoutesEnum.ABOUT_ME,
        component: AboutMe,
        data: { title: PAGES.ABOUT_ME.filename }
      }
    ]
  },
  { path: '**', redirectTo: RouteEnum.HOME }
];
