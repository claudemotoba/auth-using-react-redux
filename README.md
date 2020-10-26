## Authentification simple avec React.js avec des composant d'ordre supérieur

Si dans votre application,vous voulez implementer l'authentification, il y a de fortes chance que l'instruction(code) que vous allez écrire pour instruire React.js d'afficher ou non une page protégée par l'authentification sera repétitif dans plusieurs composant.D'où l'interêt des `Composant d'ordre supérieur` ou `Higher order component`<br />.
Car il permettent de definir des règle commune à plusiers composant.
L'un des exemples les plus connus de ces types des composants est la fonction `connect` de `react-redux` qui s'appelle de la manière suivante `export default connect(MonComposant)`.Et ce qu'il faut c'est simple définir les règles que tous les que tous les composant qui veulent accéder au `state` de `redux` doivent suivre pour accéder au données via les `props`.
Dans ce petit projet, le `composant d'ordre supérieur` est `require.auth.js` qui contient tout la logique de vérification si l'utilisateur est authentifié ou pas et que j'utilise dans le composant `comment.box.js`.<br /><br />

Si vous avez des questions, n'hesitez pas de m'écrire sur `jochri3@gmail.com`

## Comment faire fonctionner ce projet?

##Clonez le repository contenant l'API : https://github.com/jochri3/authentification-robuste-reutilisable-nodejs<br />
Suivez toutes les instructions pour démarrer l'API.

Dans votre terminal, positionnez-vous dans le dossier principal du projet et exécutez la commande :<br />
`git clone https://github.com/jochri3/authentification-reutilisable-reactjs` pour cloner le projet dans votre système

##Installer tous les dépendance avec :
`yarn` ou `npm install` selon que vous utilisez `yarn` ou `npm`

## Démarrer le projet avec :

`yarn start`

##Pour ouvrir l'application en développement.<br />
Ouvrir [http://localhost:3000](http://localhost:3000) pour le voir dans le navigateur.
