# Ginger Brière — site vitrine

Site statique (HTML/CSS/JS, sans dépendance externe ni build) présentant
Ginger Brière : bière artisanale au gingembre brassée en Brière, et sa gamme
de produits dérivés (t-shirt, chaussettes, casquette).

## Ouvrir le site

Aucune installation nécessaire : ouvrez `index.html` dans un navigateur, ou
servez le dossier avec n'importe quel serveur statique (y compris un ESP8266
via LittleFS/SPIFFS, dans l'esprit de ce dépôt).

## Ce qu'il reste à personnaliser

Le contenu ci-dessous est volontairement provisoire. Cherchez les balises
`<em>[...]</em>` et les commentaires dans `index.html` :

- **Notre histoire** (`#histoire`) : remplacer le texte par votre vraie
  histoire (qui vous êtes, la genèse du projet, pourquoi le gingembre et la
  Brière).
- **Le documentaire** (`#documentaire`) : dès que la vidéo est en ligne,
  remplacer le bloc "bientôt disponible" par l'`<iframe>` YouTube/Vimeo
  (le code est déjà en commentaire dans le fichier, prêt à décommenter).
- **Localisation** (`#localisation`) : la carte pointe actuellement sur le
  Parc naturel régional de Brière à titre de repère. Remplacez les
  coordonnées dans l'URL de la carte (`bbox` et `marker`) et le texte
  d'adresse par votre emplacement exact.
- **Produits** (`#produits`) : prix, descriptions détaillées et lien vers une
  boutique en ligne sont à ajouter quand ils seront disponibles.
- **Contact / réseaux sociaux** (pied de page) : e-mail et réseaux sociaux à
  renseigner.
- **Photos et logo** : les illustrations actuelles (héron, chaland, brume sur
  les marais) sont des SVG dessinés directement dans `index.html`, sans
  dépendance à des images externes. Elles peuvent être remplacées par vos
  propres photos/logo en ajoutant des fichiers dans ce dossier et en les
  référençant depuis `index.html`.

## Structure

- `index.html` — contenu et structure des sections
- `style.css` — mise en page, thème visuel (marais/aventure), responsive
- `script.js` — menu mobile + animations d'apparition au scroll
