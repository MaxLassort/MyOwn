# CV  Godot + Angular

> 
## 🎯 Démo

🔗 **[Voir le CV en ligne](https://myownworld.netlify.app/)**

## ⚡ Technologies

- **Frontend:** Angular 21 + Tailwind CSS
- **Jeu:** Godot 3.6.2 + C#/.NET
- **Déploiement:** Netlify
- **CI/CD:** GitHub Actions

## 🏗️ Architecture

[Diagramme C4 à venir]

## 🚀 Installation locale

### Prérequis
- Node.js 22+
- .NET 8.0+
- Godot 3.6.2 avec support Mono

### Steps
```bash
# 1. Cloner le projet
git clone https://github.com/VOTRE-USERNAME/votre-repo.git

# 2. Angular
cd angular
npm install
ng serve

# 3. Godot (développement)
# Ouvrir godot/ dans Godot Editor
```

### 📁 Structure du projet

```Text
├── .github/workflows/     # Pipeline CI/CD
├── godot/                 # Projet Godot C#
├── angular/               # Application Angular
└── docs/                  # Documentation
```

### 🔄 Workflow de développement
1. Développement Godot → Export local
2. Copy vers Angular → Test local
3. Push → Pipeline automatique
4. Deploy → Netlify

#### Architectures 
```mermaid 
flowchart LR
    subgraph "Development"
        Godot[Godot C#] --> Export[HTML5 Export]
        Angular[Angular TS] --> Build[ng build]
    end
    
    subgraph "Production"
        Export --> Assets[Angular Assets]
        Build --> Dist[Static Files]
        Assets --> Dist
        Dist --> Netlify[Netlify CDN]
    end
```

```mermaid 
sequenceDiagram
    participant D as Développeur
    participant G as GitHub
    participant A as Actions
    participant N as Netlify
    participant U as Utilisateur
    
    D->>G: Push code
    G->>A: Trigger CI
    A->>A: Build Godot
    A->>A: Build Angular
    A->>N: Deploy
    U->>N: Visite CV
    N->>U: Angular + Godot
```


#### Structure Noeud GODOT
```Text 
📁 Main (Node2D)
├── 📁 Environment (Node2D)
│   ├── 🗺️ Background (TileMap)     ← Terrain, routes
│   ├── 🗺️ Objects (TileMap)        ← Structures, déco
│   └── 🗺️ Foreground (TileMap)     ← Ombres, overlay
└── 📁 Interactive (Node2D)          ← Pour plus tard
```