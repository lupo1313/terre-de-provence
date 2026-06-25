# Terre de Provence — Site vitrine

Site vitrine une page pour le magasin **Terre de Provence** (primeur + épicerie fine), 26 rue d'Endoume, 13007 Marseille.

## Objectif
Faire venir les gens en boutique : horaires, adresse, itinéraire, téléphone et produits de saison mis en avant. Pas de vente en ligne.

## Fichiers
- `index.html` — structure et contenu
- `styles.css` — toute la direction artistique (palette terre/olive/ocre)
- `script.js` — nav au scroll, animations, statut ouvert/fermé, images

## Tester en local
Ouvre simplement `index.html` dans ton navigateur (double-clic). Tout fonctionne sans serveur.

## Les photos
Toutes les images sont de vraies photos du magasin, rangées dans `images/`. Le mapping se règle en haut de `script.js` :

| Emplacement sur le site            | Clé        | Fichier               |
|------------------------------------|------------|-----------------------|
| Image principale (hero)            | `market`   | `images/devanture.png`|
| Carte « Fraises & cerises »        | `fraises`  | `images/fraises.jpg`  |
| ↳ au survol                        | `fraises`  | `images/cerises.jpg`  |
| Carte « Pêches & abricots »        | `peches`   | `images/peches.jpg`   |
| ↳ au survol                        | `peches`   | `images/agrumes.jpg`  |
| Carte « Tomates de plein champ »   | `tomates`  | `images/tomates.jpg`  |
| ↳ au survol                        | `tomates`  | `images/tomates-2.jpg`|
| Carte « Le panier du marché »      | `legumes`  | `images/legumes.jpg`  |
| ↳ au survol                        | `legumes`  | `images/legumes-2.jpg`|
| Section « Le frais, d'abord »      | `primeur`  | `images/primeur.jpg`  |
| Section « Les belles choses »      | `epicerie` | `images/epicerie.jpg` |
| Section « La cave à olives »       | `olives`   | `images/olives.jpg`   |
| Section « Le circuit court »       | `producteurs`| `images/producteurs.webp` |
| Bandeau « Au cœur d'Endoume »      | `devanture`| `images/lieu.jpg`     |

Pour changer une image : remplace le fichier dans `images/` (même nom), ou modifie le chemin dans `IMAGES` / `HOVER` au début de `script.js`. Si une image manque, un fond coloré chaleureux reste affiché (le site ne casse jamais).

D'autres photos et vidéos du magasin sont disponibles dans le dossier `vrai fruits et legumes/` (archive source, non utilisée directement par le site).

## Ce qu'il reste à personnaliser plus tard
- Logo définitif (le bloc « TdP » est un logo typographique provisoire)
- Liens réseaux sociaux (Instagram / Facebook) si vous en créez
- Bouton « Donner mon avis » vers la fiche Google si souhaité
- Éventuellement une courte vidéo du magasin en fond (4 vidéos dispo dans `vrai fruits et legumes/`)

## Déploiement
Comme les autres sites : push sur un repo GitHub privé puis mise en ligne via Hostinger (ou GitHub Pages pour un test rapide).
