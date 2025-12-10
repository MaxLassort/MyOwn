# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


```text

src/app/
├── app.component.ts       # ✅ Racine
├── app.config.ts          # ✅ Config
├── app.config.server.ts   # ✅ SSR Config
├── app.css                # ✅ Styles globaux app
├── app.html               # ✅ Template principal
├── app.routes.ts          # ✅ Routes principales
├── app.routes.server.ts   # ✅ Routes SSR
├── app.spec.ts           # ✅ Tests
├── app.ts                # ✅ Logique app
├── assets/               # ✅ Ressources
│   ├── godot-game/       # 🎮 Fichiers Godot
│   ├── images/
│   ├── icons/
│   └── documents/
├── core/                 # ✅ Services globaux
│   ├── services/
│   ├── guards/
│   └── interceptors/
├── shared/               # ✅ Composants partagés
│   ├── components/
│   ├── directives/
│   ├── pipes/
│   └── models/
└── features/             # ✅ Fonctionnalités
    ├── game/             # ✅ Domaine jeu
    │   ├── components/
    │   ├── services/
    │   └── models/
    ├── home/             # ✅ Page d'accueil
    │   ├── components/
    │   └── models/
    ├── resume/           # ✅ Domaine CV
    │   ├── components/
    │   ├── services/
    │   └── models/
    └── contact/          
        ├── components/
        ├── services/
        └── models/
```
