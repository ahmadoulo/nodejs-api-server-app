# 📝 Application Node.js avec Authentification et Publication d'Articles

## 🎯 Objectif

Cette application web permet à un utilisateur de :
- Créer un compte et se connecter (authentification JWT)
- Poster des articles (titre + contenu)
- Voir les articles publiés
- Supprimer ses propres posts

---

## 🛠️ Stack technique

- **Node.js + Express** – API REST
- **PostgreSQL** – Base de données relationnelle
- **JWT** – Authentification sécurisée par token
- **bcryptjs** – Hachage des mots de passe
- **HTML/CSS/JS** – Interface minimaliste
- **Docker & Docker Compose** – Conteneurisation des services

---

## 📦 Structure du projet

├── public/ # Frontend (HTML, JS) ├── server.js # API Node.js principale ├── postRoutes.js # Routes pour les articles ├── .env # Variables d'environnement ├── Dockerfile # Dockerfile backend ├── docker-compose.yml # Déploiement complet (app + BDD) └── init.sql # Script SQL d'initialisation


---

## 🚀 Démarrage rapide avec Docker

 **Cloner le dépôt** :
   ```bash
   git clone https://github.com/ahmadoulo/nodejs-api-server-app
   cd nodejs-api-server-app

```bash
docker-compose up --build

Accéder à l'app :
http://localhost:3000
