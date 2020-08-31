# Serveur
Bienvenue sur le dépôt du serveur de notre moteur de jeu.

## Démarrage
Le serveur est basé sur le framework [AdonisJS](https://adonisjs.com/). Le choix s'est porté vers ce framework pour avoir une bonne maintenabilité (contrairement à Express qui devient compliqué à maintenir lorsque l'application grossit). Dans un premier temps, nous n'utiliserons que quelques fonctionnalités donc la prise en main ne sera pas difficile.

### Installation
```bash
# Cloner le dépôt
git clone -b master https://github.com/ligue-dev/ligue-game-client.git

# Aller à la racine du projet
cd ligue-game-engine

# Aller dans la partie serveur
cd server

# Installer les paquets nécessaires
npm install
```

### Lancer le serveur
```bash
npm run start
# Par défaut, le serveur sera accessible via http://localhost:3333
``` 
