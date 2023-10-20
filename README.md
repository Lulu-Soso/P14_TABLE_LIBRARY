<!-- Texte affiché en Markdown -->

# SuperTable 

![Alt text](https://github.com/Lulu-Soso/P14_TABLE_LIBRARY/blob/main/src/lib/assets/SuperTable1.png)

## Introduction à SuperTable

SuperTable est une bibliothèque JavaScript puissante et polyvalente, conçue pour simplifier l'affichage de données dans un tableau personnalisable en utilisant React.

## Pourquoi utiliser SuperTable ?
### Gain de Temps :
SuperTable vous permet de créer rapidement des tableaux personnalisés sans avoir à écrire de nombreuses lignes de code HTML et CSS. Économisez du temps précieux sur le développement front-end.

### Flexibilité Maximale :
Notre bibliothèque offre une flexibilité maximale pour personnaliser l'apparence et le comportement de vos tableaux. Personnalisez chaque aspect, de la couleur des cellules à la gestion des événements utilisateur.

### Interactivité Avancée :
SuperTable inclut des fonctionnalités avancées pour rendre vos tableaux interactifs. Triez, filtrez et paginez vos données en un clic.

## Principales fonctionnalités de SuperTableReact
- **Personnalisation Facile** : Personnalisez l'apparence de votre tableau en utilisant des thèmes prédéfinis ou en créant votre propre style CSS.

- **Gestion des Données** : SuperTable facilite la gestion des données, que ce soit pour afficher des informations complexes, des données en temps réel ou des données provenant d'une API.

- **Intégration Transparente** : Intégrez SuperTableReact dans vos projets React existants sans tracas.

Que vous cherchiez à améliorer la présentation de vos données, à simplifier la gestion de grands ensembles d'informations ou à créer des tableaux interactifs pour vos applications web, SuperTableReact est l'outil idéal pour atteindre vos objectifs.

## Comment commencer
Pour commencer à utiliser SuperTableReact, suivez simplement ces étapes :

1. **Installation** : Installez SuperTableReact en utilisant npm ou yarn.

```shell
npm install supertable
```


2. **Importation** : Importez la bibliothèque dans votre composant React.

```javascript
import SuperTableReact from 'supertablereact';
```

3. **Utilisation** : Utilisez SuperTableReact pour créer et personnaliser votre tableau de données.

```jsx
<SuperTable data={votreData} />
```

## Personnalisation des Colonnes

Pour personnaliser les colonnes de votre tableau avec SuperTableReact, vous devez fournir un tableau d'objets contenant deux propriétés clés : "key" et "label". Ces propriétés sont essentielles pour déterminer quelles données seront affichées dans le tableau et quelles étiquettes seront utilisées pour les en-têtes de colonne. Voici comment vous pouvez expliquer cela :

"Pour personnaliser les colonnes de votre tableau avec SuperTableReact, vous devez créer un tableau d'objets appelé `customColumnsTable`. Chaque objet de ce tableau doit contenir deux propriétés :

- `key` : Cette propriété représente la clé de la colonne, qui doit correspondre à la clé des données que vous souhaitez afficher dans cette colonne.

- `label` : Cette propriété représente l'étiquette de la colonne, qui sera affichée comme en-tête de la colonne dans le tableau."

```javascript
const customColumnsTable = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "birthDate", label: "Date of Birth" },
  { key: "startDate", label: "Start Date" },
  { key: "street", label: "Street" },
  { key: "city", label: "City" },
  { key: "state", label: "State" },
  { key: "zipCode", label: "Zip Code" },
  { key: "department", label: "Department" },
  ...
];
```

Une fois que vous avez défini votre tableau customColumnsTable, vous pouvez le passer comme prop columnsTable à votre composant ```<SuperTable />```. Voici comment vous pouvez l'utiliser dans votre code :



```jsx
<SuperTable
  data={votreData}
  columnsTable={customColumnsTable}
/>
```

En spécifiant ces colonnes personnalisées, vous avez un contrôle total sur les données que vous souhaitez afficher et sur les en-têtes de colonne que vous souhaitez utiliser dans votre tableau.

<!-- Fin du texte affiché en Markdown -->

