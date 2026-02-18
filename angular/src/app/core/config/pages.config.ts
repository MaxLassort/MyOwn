export const PAGES = {
  HOME: {
    routeName: 'home',
    filename: 'home',
    path: '/',
    icon: 'home',
    title: 'Home'
  },
  GAME: {
    routeName: 'game',
    filename: 'game.exe',
    path: '/game',
    icon: 'sports_esports',
    title: 'Game'
  },
  ABOUT_ME: {
    routeName: 'about-me',
    filename: 'about_me.html',
    path: '/resume/about-me',
    icon: 'html',
    title: 'About Me'
  },
  EDUCATION: {
    routeName: 'education',
    filename: 'education.md',
    path: '/resume/education',
    icon: 'draft',
    title: 'Education'
  },
  SKILLS: {
    routeName: 'skills',
    filename: 'skills.json',
    path: '/resume/skills',
    icon: 'draft',
    title: 'Skills'
  },
  EXPERIENCE: {
    routeName: 'experiences',
    filename: 'experiences.html',
    path: '/resume/experiences',
    icon: 'html',
    title: 'Experience'
  }
} as const;
