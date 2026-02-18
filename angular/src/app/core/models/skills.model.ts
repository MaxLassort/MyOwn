export type IconDefinition = [string, string]; // FontAwesome tuple: ['fab', 'docker']

export enum SkillLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  EXPERT = 'EXPERT',
  MASTER = 'MASTER',
  PIXEL_PERFECT = 'PIXEL PERFECT',
  VERSATILE = 'VERSATILE',
  TEAM_PLAYER = 'TEAM PLAYER'
}

export interface TechSkillCategory {
  name: string;
  icon: IconDefinition;
  color: string; // tailwind class like text-sky-500
}

export interface TechSkillCard {
  name: string;
  level: SkillLevel;
  description: string;
  tags: string[];
  category: TechSkillCategory;
}
export const frontendCategory: TechSkillCategory = {
  name: 'Frontend',
  icon: ['fas', 'laptop-code'],
  color: 'text-sky-500',
};

export const backendCategory: TechSkillCategory = {
  name: 'Backend',
  icon: ['fas', 'server'],
  color: 'text-amber-500',
};

export const databaseCategory: TechSkillCategory = {
  name: 'Databases',
  icon: ['fas', 'database'],
  color: 'text-rose-500',
};

export const devopsCategory: TechSkillCategory = {
  name: 'DevOps ',
  icon: ['fas', 'tools'],
  color: 'text-green-500',
};
export const techSkills: TechSkillCard[] = [
  // ⭐ FRONTEND
  {
    name: 'Angular',
    level: SkillLevel.EXPERT,
    description: 'Built complex modular applications using Angular. Mastery of reactive forms, services, dependency injection, component architecture, and security.',
    tags: ['NgRx', 'HttpClient', 'FormsModule', 'Routing', 'Unit Testing'],
    category: frontendCategory
  },
  {
    name: 'Web UI ',
    level: SkillLevel.MASTER,
    description: 'Developed reusable UI components, responsive interfaces, and interactive frontends using React, TypeScript, and modern HTML/CSS. Strong knowledge of state management and accessibility.',
    tags: [
      'React',
      'JSX',
      'TypeScript',
      'HTML5',
      'CSS Grid',
      'Flexbox'
    ],
    category: frontendCategory
  },

  // ⭐ BACKEND
  {
    name: 'Java & Spring Boot',
    level: SkillLevel.EXPERT,
    description: 'Backend development with Spring Boot 3. REST APIs, multi-profile config, JPA ORM, security and service layers used in multiple large-scale applications.',
    tags: ['Spring Boot', 'JPA', 'Security', 'REST API', 'DTO', 'WebFlux'],
    category: backendCategory
  },
  {
    name: 'NestJS & Node.js',
    level: SkillLevel.INTERMEDIATE,
    description: 'Backend APIs built with NestJS and executed with Node.js. Modular architecture with TypeScript, async controllers/services, and Prisma.',
    tags: [ 'Prisma', 'Async', 'Routing', 'Middlewares', 'TypeScript'],
    category: backendCategory
  },
  {
    name: 'PHP (Bootcamp)',
    level: SkillLevel.BEGINNER,
    description: 'Learned PHP basics during 3WAcademy bootcamp: simple MVC architecture, form handling and SQL interaction.',
    tags: ['PHP', 'MVC', 'Forms', 'MySQL'],
    category: backendCategory
  },

  // ⭐ DATABASES
  {
    name: 'SQL & Databases',
    level: SkillLevel.ADVANCED,
    description: 'Strong command of relational database modeling and querying. Used extensively with PostgreSQL and MySQL in real-world backend projects.',
    tags: ['SQL', 'PostgreSQL', 'MySQL', 'Schemas', 'Constraints', 'JOIN', 'Indexes', 'PostGIS'],
    category: databaseCategory
  },

  // ⭐ DEVOPS
  {
    name: 'DevOps, CI/CD & Versioning',
    level: SkillLevel.VERSATILE,
    description: 'Built and maintained CI/CD pipelines with GitLab CI, Jenkins, GitHub Actions. Dockerized environments. Git-based collaboration workflows.',
    tags: [
      'Docker',
      'GitLab CI/CD',
      'Azure DevOps',
      'Jenkins',
      'GitHub Actions',
      'Git'
    ],
    category: devopsCategory
  }
];
