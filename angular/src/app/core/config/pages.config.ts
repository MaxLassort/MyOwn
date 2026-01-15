import {ResumeRoutesEnum, RouteEnum} from '../../route.enum';


export const PAGES = {
  HOME: {
    routeName: 'home',
    filename: 'home',
    path: `/${RouteEnum.HOME}`,
    icon: 'home',
    title: 'Home'
  },
  GAME: {
    routeName: 'game',
    filename: 'game.exe',
    path: `/${RouteEnum.GAME}`,
    icon: 'sports_esports',
    title: 'Game'
  },
  ABOUT_ME: {
    routeName: 'about-me',
    filename: 'about_me.html',
    path: `/${RouteEnum.RESUME}/${ResumeRoutesEnum.ABOUT_ME}`,
    icon: 'html',
    title: 'About Me'
  },
  // Placeholders pour les futurs fichiers
  SKILLS: {
    filename: 'skills.json',
    path: `/${RouteEnum.RESUME}/skills`, // À définir plus tard
    icon: 'draft',
    title: 'Skills'
  },
  EDUCATION: {
    routeName: 'education',
    filename: 'education.md',
    path: `/${RouteEnum.RESUME}/education`, // À définir plus tard
    icon: 'draft',
    title: 'Education'
  },
  EXPERIENCE: {
    filename: 'experience.js',
    path: `/${RouteEnum.RESUME}/experience`, // À définir plus tard
    icon: 'javascript',
    title: 'Experience'
  }
} ;
