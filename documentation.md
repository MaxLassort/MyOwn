# MyOwn World - Interactive CV Documentation

This document provides a comprehensive overview of the "MyOwn World" Interactive CV project. For a developer-focused quick start guide in French, please see the [README.md](README.md) file.

## 🌟 Introduction

"MyOwn World" is a unique and interactive online CV that presents a professional profile in the form of a 2D explorable world. Instead of a traditional resume, users can navigate through a game-like environment to discover different aspects of the CV, such as skills, experience, and projects.

The project combines a modern web frontend with a lightweight game engine to create an engaging and memorable user experience.

## 🎮 Live Demo

You can explore the live version of the project here:
**[https://myownworld.netlify.app/](https://myownworld.netlify.app/)**

## 💡 How It Works

The user is welcomed to a 2D world where they can walk around using the standard `WASD` or arrow keys. As they explore, they can interact with different objects or enter specific zones that trigger the display of information, such as project details, skills, or work history.

The application also provides a traditional resume view for those who prefer a classic format, accessible through the application's routing.

## 🏗️ Technical Architecture

The project is a Single Page Application (SPA) built with two main components:

1.  **Angular Frontend**: The main container for the application. It handles the routing, the main UI, and serves the Godot game. It's built with Angular and TypeScript.

2.  **Godot Game**: The 2D interactive world is a Godot project developed in C#. It is exported as an HTML5 build (WASM and JavaScript).

These two components interact in a simple yet effective way: the Angular application embeds the Godot game using an `<iframe>`. The entire Godot HTML5 export is included as a static asset in the `angular/src/assets/godot-game/` directory.

This architecture allows for a clean separation of concerns:
-   **Angular** manages the overall web application structure, navigation, and API interactions (if any).
-   **Godot** is entirely focused on the game logic and rendering.

Communication between the Angular app and the Godot game is currently minimal. Future improvements could involve using the `window.postMessage` API for more complex interactions between the web view and the game world.

## ✨ Features

-   **Interactive 2D World**: A CV presented as an explorable game.
-   **Standard Resume View**: For a more traditional experience, the application also includes classic resume pages.
-   **Responsive Design**: The application is designed to work on modern web browsers.
-   **CI/CD Pipeline**: The project is automatically built and deployed to Netlify on every push to the main branch, thanks to GitHub Actions.

## ⚡ Technology Stack

-   **Frontend**: Angular, TypeScript, Tailwind CSS
-   **Game Engine**: Godot (with C#/.NET)
-   **Deployment**: Netlify
-   **CI/CD**: GitHub Actions

## 🚀 Getting Started (for Developers)

To run the project locally, you will need the following prerequisites:

-   Node.js (v22 or higher)
-   .NET SDK (v8.0 or higher)
-   Godot Engine (v3.6.2 or compatible, with Mono/C# support)

### Local Setup Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR-USERNAME/your-repo.git
    cd your-repo
    ```

2.  **Set up the Angular application:**
    ```bash
    cd angular
    npm install
    ```

3.  **Export the Godot Game:**
    -   Open the Godot project located in the `godot/` directory with the Godot Engine.
    -   Go to `Project > Export...` and select the "HTML5" preset.
    -   Click `Export Project`.
    -   **Important**: Export the game to the `angular/src/assets/godot-game/` directory. You should have `MyOwn.html`, `MyOwn.js`, `MyOwn.pck`, and `MyOwn.wasm` files in that directory.

4.  **Run the Angular development server:**
    From the `angular/` directory:
    ```bash
    ng serve
    ```
    The application will be available at `http://localhost:4200/`.

## 📦 Build and Deployment

The project is configured for continuous deployment to Netlify. The `netlify.toml` file at the root of the project specifies the build commands and the directory to be published.

The CI/CD pipeline is defined in `.github/workflows/ci.yml`. It automates the following steps:
1.  Builds the Godot project.
2.  Builds the Angular application.
3.  Deploys the final static site to Netlify.

## 📁 Project Structure

```
.
├── .github/workflows/  # CI/CD pipeline for GitHub Actions
├── angular/            # Angular frontend application
│   ├── src/
│   │   ├── app/        # Angular components, routes, and services
│   │   └── assets/
│   │       └── godot-game/ # The exported Godot HTML5 build
├── godot/              # Godot project source files (scenes, scripts)
└── docs/               # Documentation files
```
