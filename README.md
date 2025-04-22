📋 Application Node.js avec Authentification et Publication d'Articles

🌟 Objectif

Cette application web permet à un utilisateur de :

🔑 Créer un compte et se connecter (authentification JWT)

📄 Poster des articles (titre + contenu)

📈 Voir les articles publiés

🗑️ Supprimer ses propres posts

🛠️ Stack technique

Node.js + Express – API REST

PostgreSQL – Base de données relationnelle

JWT – Authentification sécurisée par token

bcryptjs – Hachage des mots de passe

HTML/CSS/JS – Interface minimaliste

Docker & Docker Compose – Conteneurisation des services

📦 Structure du projet

├── public/              # Frontend (HTML, JS)
├── server.js            # API Node.js principale
├── postRoutes.js        # Routes pour les articles
├── .env                 # Variables d'environnement
├── Dockerfile           # Dockerfile backend
├── docker-compose.yml   # Déploiement complet (app + BDD)
└── init.sql             # Script SQL d'initialisation

🚀 Démarrage rapide avec Docker

Cloner le dépôt :
''bash
git clone https://github.com/ahmadoulo/nodejs-api-server-app.git
cd nodejs-api-server-app

Démarrer l'application :

docker-compose up --build -d

Accéder à l'app :http://localhost:3000

🧰 Commandes utiles

🔄 Rebuilder si nécessaire :

docker-compose build

🪑 Supprimer tous les volumes (⚠️ perte des données) :

docker-compose down -v

🔍 Se connecter à PostgreSQL :

docker exec -it node-auth-app-db-1 /bin/bash
psql -U postgres -d auth_db

🗃️ Base de données (init.sql)

La table posts est automatiquement créée à l'initialisation si le volume Docker est vide grâce à init.sql.Pour forcer sa relecture :

docker-compose down -v  # Supprime les volumes
docker-compose up       # Recrée tout proprement

🔐 Exemple de token JWT

Une fois connecté, un token JWT est stocké côté navigateur dans localStorage. Il est ensuite utilisé dans le header Authorization pour les requêtes :

Authorization: Bearer <token>

✨ Améliorations futures

✅ Séparation claire frontend/backend

⏳ Validation des champs en front

🔐 Refresh token

🖼️ Upload d'image pour les articles

💬 Système de commentaires

👨‍💼 Auteur

Développé avec ❤️ par Ahmadou Sakhir LO. Pour toute suggestion, issue ou amélioration, n'hésitez pas à contribuer !

