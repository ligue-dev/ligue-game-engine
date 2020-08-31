# Client
Bienvenue sur le dépôt du client de notre moteur de jeu. Fraîchement démarré, aucune version stable n'est encore disponible.

## Démarrage
Seul l'environnement de développement est opérationnel. Il comprend:
- Prettier pour le formattage
- ESLint afin d'éviter les erreurs classiques avec Javascript
- Parcel qui procure un rechargement à chaud du code

### Installation
```bash
# Cloner le dépôt
git clone -b master https://github.com/ligue-dev/ligue-game-client.git

# Aller à la racine du projet
cd ligue-game-engine

# Aller dans la partie client
cd client

# Installer les paquets nécessaires
npm install
```

### Lancer le client
```bash
npm run start
# Par défaut, le client sera accessible via http://localhost:1234
``` 

### Formater le code
```bash
npm run format
```

### Vérfier la qualité du code
```
npm run lint
```
