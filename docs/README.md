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

## Le portrait

Deux fichiers, deux rôles :

- `assets/img/portrait.png` — la photo d'origine, 800×800, conservée comme source.
- `assets/img/portrait.jpg` — la version affichée : recadrée sur le visage,
  réduite à 320×320 et compressée (17 Ko au lieu de 741 Ko).

C'est le `.jpg` que charge la page. Pour changer de photo, remplacer le `.png`
puis régénérer le `.jpg` avec le même recadrage carré centré sur le visage.
Tant que le `.jpg` est absent, la page bascule seule sur
`portrait-placeholder.svg`, donc rien ne casse entre-temps.

## Remplacer une icône d'application

Chaque carte affiche une tuile dessinée, stockée dans `assets/img/apps/`
(`oodrive-work.svg`, `oui-sncf.svg`, `billify.svg`…). Les glyphes sont
normalisés : même emprise et même graisse de trait dans les douze tuiles.

Pour utiliser la vraie icône d'une application, déposer le PNG à côté du SVG
sous le même nom, puis changer l'extension dans l'attribut `src` de la carte
correspondante dans `index.html` :

```html
<img class="card__tile" src="assets/img/apps/oodrive-work.png" alt="" width="64" height="64">
```

Les icônes d'applications de Oodrive, SNCF, Crédit Agricole et BNP Paribas
sont des marques déposées de leurs éditeurs. Les afficher pour illustrer une
mission est un usage courant en portfolio, mais cela reste ton appel.

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
