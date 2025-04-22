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

![Capture d'écran 2025-04-22 222841](https://github.com/user-attachments/assets/3d7cefc7-9e89-455b-a26c-794983b937aa)
![Capture d'écran 2025-04-22 222912](https://github.com/user-attachments/assets/95ca0543-23e8-4880-aa93-0fe3f265ffdb)
![Capture d'écran 2025-04-22 223349](https://github.com/user-attachments/assets/c6ef6529-e3d1-4737-b143-eada2e3f3cc6)
![Capture d'écran 2025-04-22 223800](https://github.com/user-attachments/assets/e3390d7b-34f9-4aea-98c6-1a6a1c2c6281)
![Capture d'écran 2025-04-22 223931](https://github.com/user-attachments/assets/0f274bd3-2fa4-4a56-9e1c-cca7a8bf4e67)
![Capture d'écran 2025-04-22 224004](https://github.com/user-attachments/assets/a4cdf966-cc77-4a3e-9845-47539af7d455)
![Capture d'écran 2025-04-22 224004](https://github.com/user-attachments/assets/c742bfd7-29e1-4ff4-aa5b-b54efb7c2b56)
![Capture d'écran 2025-04-22 224036](https://github.com/user-attachments/assets/41e32e9f-a84d-40e2-a5be-406f3eedfb02)


## 🧑‍💻 Auteur

Ahmadou Sakhir LO

---

💬 Pour toute suggestion ou bug, ouvre une issue ou une PR ! Merci 🙏
