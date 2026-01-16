import {Period} from './period.model';

export interface Experience {
  title: string,
  company: string,
  description: string,
  techs: string[],
  period: Period,
}

export interface TechnologyCard {
  icon?: string,
  iconUrl?: string,
  name: string
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Web Developer",
    company: "Axa Wealth Services – Exalt",
    description: "Development of a web application and microservices for insurance product management. Full-stack contribution using Angular 17 and Spring Boot 3, CI/CD pipeline, secure APIs, SQL optimization, and Agile participation.",
    techs: [
      "Front-End",
      "Back-End",
      "UX/UI",
      "Architecture",
      "CI/CD",
      "Business Logic",
      "Agile",
      "Security"
    ],
    period: {
      start: new Date("2023-12-01"),
      end: new Date("2024-12-01"),
    }
  },
  {
    title: "Full Stack Developer",
    company: "JUNE Association – Exalt",
    description: "Development of a digital health platform for managing medical-social care workflows. Built admin dashboards, user paths, and integrations with PostgreSQL via NestJS. React-based UI and Docker deployment.",
    techs: [
      "Core Tech",
      "Front-End",
      "Back-End",
      "UX/UI",
      "Agile"
    ],
    period: {
      start: new Date("2024-06-01"),
      end: new Date("2024-09-01"),
    }
  },
  {
    title: "Full Stack Developer",
    company: "Ministry of Ecological Transition – ATOS",
    description: "Reverse engineering and redevelopment of a national road infrastructure management system. Complete overhaul into a Spring Boot microservice and Angular 17 SPA. PostgreSQL data refactoring and Docker environment.",
    techs: [
      "Architecture",
      "Back-End",
      "Front-End",
      "Agile",
      "CI/CD",
      "Business Logic",
      "Data Modeling",
      "Maintenance",
      "UX/UI",
    ],
    period: {
      start: new Date("2022-09-01"),
      end: new Date("2024-09-01"),
    }
  },
  {
    title: "Full Stack Java EE Developer (POEI)",
    company: "ATOS / M2i",
    description: "Intensive training program (POEI). Learned Java EE, Spring, Angular, DevOps fundamentals (Git, Jenkins, Docker), and applied skills through practical group projects.",
    techs: [
      "Training",
      "Front-End",
      "Back-End",
      "Business Logic",
      "Agile"
    ],
    period: {
      start: new Date("2021-01-01"),
      end: new Date("2021-06-01"),
    }
  },
  {
    title: "Full Stack Web Developer",
    company: "MyKlinica",
    description: "Maintenance and improvement of a medical appointment system. Bug fixing on time slot logic, implementation of autosave features, and UX improvements.",
    techs: [
      "Front-End",
      "Back-End",
      "UX/UI",
      "Maintenance",
      "Bug Fixing"
    ],
    period: {
      start: new Date("2022-05-01"),
      end: new Date("2022-06-01"),
    }
  },
  {
    title: "Web Developer - Full Stack Training (Bootcamp)",
    company: "3WAcademy",
    description: "6-month training program with 90% hands-on coding. Acquired foundations in responsive design, dynamic JavaScript/TypeScript, Vue.js, PHP, and SQL for full-stack proficiency.",
    techs: [
      "Core Tech",
      "Full Stack",
      "Front-End",
      "Entry-Level",
      "Training"
    ],
    period: {
      start: new Date("2022-01-01"),
      end: new Date("2022-06-01"),
    }
  },
  {
    title: "Physical Education Teacher",
    company: "French Ministry of National Education",
    description: "Designed physical education curriculum, taught at secondary schools, evaluated students. Developed strong public speaking, planning, and teamwork skills.",
    techs: [
      "Teaching",
      "Pedagogy",
      "Organization",
      "Communication"
    ],
    period: {
      start: new Date("2018-09-01"),
      end: new Date("2021-07-01"),
    }
  }
];
export const TECHNOLOGIES: TechnologyCard[] = [

  {icon: "html5", name: "HTML"},
  {icon: "css3-alt", name: "CSS"},
  {icon: "js", name: "JavaScript"},
  {icon: "react", name: "React"},
  {icon: "angular", name: "Angular"},
  {icon: "vuejs", name: "Vue.js"},
  {icon: "sass", name: "SASS"},
  { icon: "java", name: "Java" },
  { icon: "node-js", name: "Node.js" },
  { icon: "php", name: "PHP" },
  { icon: "docker", name: "Docker" },
  { icon: "git", name: "Git" },
  { icon: "github", name: "GitHub" },
  { icon: "gitlab", name: "GitLab" },
  { icon: "google", name: "Google Analytics" },
  { icon: "slack", name: "Slack" },
  {
    name: "Spring",
    iconUrl: "https://simpleicons.org/icons/spring.svg"
  },
  {
    name: "Spring Boot",
    iconUrl: "https://simpleicons.org/icons/springboot.svg"
  },
  {
    name: "NestJS",
    iconUrl: "https://simpleicons.org/icons/nestjs.svg"
  },
  {
    name: "Jetpack Compose",
    iconUrl: "https://simpleicons.org/icons/jetpackcompose.svg"
  },
  {
    name: "PostgreSQL",
    iconUrl: "https://simpleicons.org/icons/postgresql.svg"
  },
  {
    name: "Jenkins",
    iconUrl: "https://simpleicons.org/icons/jenkins.svg"
  },
  {
    name: "Jira",
    iconUrl: "https://simpleicons.org/icons/jirasoftware.svg"
  },
  {
    name: "Confluence",
    iconUrl: "https://simpleicons.org/icons/confluence.svg"
  },
  {
    name: "Kotlin",
    iconUrl: "https://simpleicons.org/icons/kotlin.svg"
  },
  {
    name: "SQL",
    iconUrl: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" // générique SQL
  },
  {
    name: "MySQL",
    iconUrl: "https://simpleicons.org/icons/mysql.svg"
  }
]


