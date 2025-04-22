# 📝 Projet Node.js Auth + PostgreSQL + Docker

## 📌 Objectif du projet

Créer une application web simple permettant :

- La **création de compte** ✅
- La **connexion** avec génération de **JWT** 🔐
- La **création d'articles** (titre + contenu) 📜
- La **visualisation** de tous les articles 🗒️
- La **suppression** d'un article ✂️

Le tout en mode sécurisé avec **authentification tokenisée**.

## 🧰 Technologies utilisées

- **Node.js** + **Express** 🚀
- **PostgreSQL** 🐘
- **JWT (JSON Web Token)** 🔐
- **Bcrypt.js** pour le hachage des mots de passe 🔒
- **HTML / JS Vanilla** pour l’interface utilisateur 📄
- **Docker / Docker Compose** 🐳

## ⚙️ Lancement du projet

### 1. Cloner le dépôt

```bash
git clone https://github.com/ahmadoulo/nodejs-api-server-app.git
cd nodejs-api-server-app
```

### 2. Démarrer les services

```bash
docker-compose up --build -d
```

🎉 L'application est accessible sur `http://localhost:3000`

## 📂 Arborescence principale

```bash
├── Dockerfile
├── docker-compose.yml
├── init.sql
├── public
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── home.html
│   ├── create_post.js
│   └── delete_post.js
├── server.js
├── postRoutes.js
└── .env
```

## 🗃️ init.sql (initialisation BDD automatique)

Si tu veux que les tables soient créées dès le lancement :

- Le fichier `init.sql` doit être monté ainsi :

```yaml
volumes:
  - ./init.sql:/docker-entrypoint-initdb.d/init.sql
  - pgdata:/var/lib/postgresql/data
```

⚠️ Si le volume `pgdata` existe déjà, Postgres ne rechargera **pas** le script. Supprime le volume avec :

```bash
docker volume rm nomduprojet_pgdata
```

Puis relance :

```bash
docker-compose up --build -d
```

## 🛡️ Authentification

Chaque route sensible (`/post`) est protégée par un token JWT que tu dois stocker dans `localStorage` côté client.

## ✅ Fonctionnalités 

- Créer un compte puis s'authentifier
- Génération token et stockage coté client
- Créer un post et supprimer un post autorisé uniquement si le token est fourni et valide

## 🚧 Améliorations futures

- 🔄 Ajout de la modification des posts
- 👤 Affichage des posts uniquement de l’utilisateur connecté
- 📷 Ajout d’un système d’upload d’images
- 📱 Version mobile responsive

---

## 📸 Aperçu

![Capture d'écran 2025-04-21 193609](https://github.com/user-attachments/assets/de3b1578-a885-4d99-940e-e0846a28d842)


## 🧑‍💻 Auteur

Ahmadou Sakhir LO

---

💬 Pour toute suggestion ou bug, ouvre une issue ou une PR ! Merci 🙏
