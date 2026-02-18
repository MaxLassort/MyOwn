import {Routes} from '@angular/router';
import {Game} from './features/game/components/game/game.component';
import {Home} from './features/home/home';
import {MainLayout} from './core/layout/main-layout/main-layout';
import {AboutMe} from './features/resume/pages/about-me/about-me';
import {PAGES} from './core/config/pages.config';
import {Education} from './features/resume/pages/education/education';
import {Experiences} from './features/resume/pages/experiences/experiences';
import {Skills} from './features/resume/pages/skills/skills';

export const routes: Routes = [
  {
    path: PAGES.GAME.path.substring(1), // Enlève le '/' initial
    component: Game,
    data: { title: PAGES.GAME.filename }
  },
  {
    path: '',
    component: Home,
    data: { title: PAGES.HOME.filename }
  },
  {
    path: 'resume',
    component: MainLayout,
    data: { title: 'resume' },
    children: [
      {
        path: PAGES.ABOUT_ME.routeName,
        component: AboutMe,
        data: { title: PAGES.ABOUT_ME.filename }
      },
      {
        path: PAGES.EDUCATION.routeName,
        component: Education,
        data: { title: PAGES.EDUCATION.filename }
      },
      {
        path: PAGES.EXPERIENCE.routeName,
        component: Experiences,
        data: { title: PAGES.EXPERIENCE.filename }
      },
      {
        path: PAGES.SKILLS.routeName,
        component: Skills,
        data: { title: PAGES.SKILLS.filename }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
