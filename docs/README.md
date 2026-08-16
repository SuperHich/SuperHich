# Portfolio — Hichem Laroussi

Site statique d'une seule page, sans dépendance ni étape de build.
Ouvrir `index.html` dans un navigateur suffit.

```
docs/
├── index.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── fonts/            Roboto Flex + Roboto Mono (sous-ensemble latin, WOFF2)
    └── img/              portrait
```

## Ajouter le portrait

Déposer la photo sous `assets/img/portrait.jpg` — carrée, 400×400 px minimum.
Aucune modification de code n'est nécessaire : tant que le fichier est absent,
la page affiche automatiquement `portrait-placeholder.svg`.

## Publier sur GitHub Pages

Dans **Settings → Pages** du dépôt, choisir la source *Deploy from a branch*,
la branche `main` et le dossier `/docs`. Le site est alors servi sur
`https://superhich.github.io/SuperHich/`.

Pour l'adresse plus courte `https://superhich.github.io`, il faut un dépôt
nommé `SuperHich.github.io` : y copier le contenu de `docs/` à la racine.

## Modifier le contenu

Tout le texte est écrit en clair dans `index.html`, section par section
(`#parcours`, `#apps`, `#labo`, `#expertise`, `#contact`). Les couleurs et
la typographie sont centralisées dans les variables CSS en haut de
`assets/css/style.css`.

L'adresse email est assemblée en JavaScript depuis les attributs `data-u` et
`data-d` du bouton de contact, pour limiter l'aspiration automatique.
