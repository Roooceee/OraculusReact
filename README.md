# OraculusReact

OraculusReact est une application React qui affiche l’horoscope des 12 signes du zodiaque, avec une navigation fluide et une interface responsive.

## Fonctionnalités

- **Navigation synchronisée via Zustand**  
  Le `currentIndex` est centralisé dans un store Zustand, ce qui permet de changer de signe via plusieurs moyens :  
  - Boutons “précédent” et “suivant” dans la sideNav  
  - Clic direct sur un signe dans la sideNav  
  - Navigation via le composant `next-prev-sign-nav`

- **SideNav responsive et interactive**  
  - La sideNav se ferme automatiquement dès le format tablette  
  - Un bouton permet d’ouvrir/fermer la sideNav en tablette et mobile  
  - Contrôle via gestes de swipe (gauche/droite) grâce à la bibliothèque `react-swipeable`

- **Gestion adaptative du device**  
  Le store `storeDevice` détecte dynamiquement la taille de l’écran pour adapter l’interface selon que l’on soit sur téléphone, tablette ou desktop.

- **Loader dynamique**  
  Un composant Loader s’affiche au lancement pour s’assurer que les données JSON, source des horoscopes, sont bien chargées avant l’affichage.

## Technologies utilisées

- React avec hooks  
- Zustand pour la gestion d’état globale  
- CSS Vanilla pour le style et le responsive  
- react-swipeable pour la gestion des gestes tactiles

## Structure du projet

- `storeSideNav` : store Zustand pour gérer l’état d’ouverture/fermeture de la sideNav  
- `storeDevice` : store Zustand pour détecter le type d’appareil selon la largeur d’écran  
- Composants UI modulaires et réutilisables  
- Données JSON utilisées pour alimenter les horoscopes

## Responsive Design

L’application s’adapte parfaitement à toutes les tailles d’écran, avec une UX optimisée pour mobile, tablette et desktop.

## Lien en ligne

[Voir l’application en ligne](https://oraculus-react-swart.vercel.app/)

---