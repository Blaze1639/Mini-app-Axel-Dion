# 📋 ProjectManager — Mini-App Évaluation B3

## Structure du projet

```
ProjectManagerApp/
├── App.js                          → Point d'entrée
├── package.json
└── src/
    ├── navigation/
    │   └── AppNavigator.js         → Auth/App switch + Tabs + Stack imbriqué
    ├── screens/
    │   ├── AuthScreen.js           → Connexion + Inscription Firebase
    │   ├── HomeScreen.js           → Accueil (tab 1)
    │   ├── ProjectsScreen.js       → Liste projets + FlatList (tab 2)
    │   ├── ProjectDetailScreen.js  → Détail projet (stack dans tab 2)
    │   └── FormationsScreen.js     → Formations (tab 3)
    └── services/
        └── firebase.js             → Config Firebase Auth
```

## ⚠️ Configuration Firebase (obligatoire)

1. Va sur [console.firebase.google.com](https://console.firebase.google.com)
2. Crée un projet ou utilise un existant
3. Ajoute une **application Web** (icône `</>`)
4. Active **Authentication → Email/Password** dans la console
5. Copie les clés de configuration dans `src/services/firebase.js`

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};
```

## Installation

```bash
npm install
npx expo start
```

## APIs utilisées

| Écran       | URL                                               |
|-------------|---------------------------------------------------|
| Projets     | `https://jsonplaceholder.typicode.com/todos`      |
| Formations  | `https://jsonplaceholder.typicode.com/posts`      |

> **À adapter** : remplace ces URLs par les APIs fournies dans l'énoncé.

## Barème couvert

| Critère                                        | Fichier                    | Statut |
|------------------------------------------------|----------------------------|--------|
| Firebase Auth (login + register)               | AuthScreen.js              | ✅     |
| Navigation auto Auth → App                     | AppNavigator.js            | ✅     |
| Écran Accueil distinct et fonctionnel          | HomeScreen.js              | ✅     |
| Fetch API 1 avec useEffect + try/catch         | ProjectsScreen.js          | ✅     |
| FlatList (pas de .map dans ScrollView)         | ProjectsScreen.js          | ✅     |
| Navigation Stack imbriquée Projets → Détail    | AppNavigator.js            | ✅     |
| Passage de params via route.params             | ProjectDetailScreen.js     | ✅     |
| Retour natif depuis le détail                  | AppNavigator.js            | ✅     |
| Fetch API 2 avec try/catch                     | FormationsScreen.js        | ✅     |
| Affichage formations                           | FormationsScreen.js        | ✅     |
| StyleSheet.create() partout                    | Tous les écrans            | ✅     |
| Spinner + message erreur visible               | ProjectsScreen + Formations| ⭐     |
| Messages d'erreur saisie (email/mdp)           | AuthScreen.js              | ⭐     |
| Bouton déconnexion                             | HomeScreen.js              | ⭐     |
| Filtrage formations par catégorie + recherche  | FormationsScreen.js        | ⭐     |
