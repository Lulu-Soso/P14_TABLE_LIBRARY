<!-- Markdown -->

# SuperTable

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable1.png)

## Introduction à SuperTable

SuperTable est une bibliothèque JavaScript puissante et polyvalente, conçue pour simplifier l'affichage de données dans un tableau personnalisable en utilisant React.

## Pourquoi utiliser SuperTable ?

### Gain de Temps :

SuperTable vous permet de créer rapidement des tableaux personnalisés sans avoir à écrire de nombreuses lignes de code HTML et CSS. Économisez du temps précieux sur le développement front-end.

### Flexibilité Maximale :

Notre bibliothèque offre une flexibilité maximale pour personnaliser l'apparence et le comportement de vos tableaux. Personnalisez chaque aspect, de la couleur des cellules à la gestion des événements utilisateur.

### Interactivité Avancée :

SuperTable inclut des fonctionnalités avancées pour rendre vos tableaux interactifs. Triez, filtrez et paginez vos données en un clic.

## Principales fonctionnalités de SuperTable

- **Personnalisation Facile** : Personnalisez l'apparence de votre tableau en utilisant des thèmes prédéfinis ou en créant votre propre style CSS.

- **Gestion des Données** : SuperTable facilite la gestion des données, que ce soit pour afficher des informations complexes, des données en temps réel ou des données provenant d'une API.

- **Intégration Transparente** : Intégrez SuperTable dans vos projets React existants sans tracas.

Que vous cherchiez à améliorer la présentation de vos données, à simplifier la gestion de grands ensembles d'informations ou à créer des tableaux interactifs pour vos applications web, SuperTableReact est l'outil idéal pour atteindre vos objectifs.

## Comment commencer

Pour commencer à utiliser SuperTableReact, suivez simplement ces étapes :

1. **Installation** : Installez SuperTableReact en utilisant npm ou yarn.

```shell
npm install supertable
```

2. **Importation** : Importez la bibliothèque dans votre composant React.

```javascript
import SuperTable from "supertable";
```

3. **Utilisation** : Utilisez SuperTable pour créer et personnaliser votre tableau de données.

```jsx
<SuperTable data={votreData} />
```

## Personnalisation des Colonnes

Pour personnaliser les colonnes de votre tableau avec SuperTable, vous devez fournir un tableau d'objets contenant deux propriétés clés : "key" et "label". Ces propriétés sont essentielles pour déterminer quelles données seront affichées dans le tableau et quelles étiquettes seront utilisées pour les en-têtes de colonne. Voici comment vous pouvez expliquer cela :

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
  { key: "department", label: "Department" }
];
```

Une fois que vous avez défini votre tableau customColumnsTable, vous pouvez le passer comme prop columnsTable à votre composant `<SuperTable />`. Voici comment vous pouvez l'utiliser dans votre code :

```jsx
<SuperTable 
  data={yourData} 
  columnsTable={customColumnsTable} 
/>
```

En spécifiant ces colonnes personnalisées, vous avez un contrôle total sur les données que vous souhaitez afficher et sur les en-têtes de colonne que vous souhaitez utiliser dans votre tableau.

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable8.png)

### Gestion des Recherches Vides

SuperTable inclut une gestion intelligente des cas où la barre de recherche ne trouve pas de correspondances dans les données affichées. Lorsque l'utilisateur effectue une recherche qui ne renvoie aucun résultat, SuperTable affiche un message d'information pour informer l'utilisateur qu'aucune correspondance n'a été trouvée.

Ce message informatif est conçu pour améliorer l'expérience de l'utilisateur en lui indiquant que la recherche n'a pas abouti et en l'invitant à ajuster ses critères de recherche. Cela permet d'assurer une expérience utilisateur fluide et de réduire toute confusion qui pourrait survenir en cas de recherche infructueuse.

SuperTable s'efforce de rendre la recherche et la navigation dans les données aussi simples et efficaces que possible, et la gestion des recherches vides en est un exemple. Cela permet aux utilisateurs de trouver plus facilement les informations dont ils ont besoin tout en maintenant une interface utilisateur propre et intuitive.

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable4.png)

### Personnalisation de l'Apparence du Tableau

SuperTable offre un large éventail d'options de personnalisation pour que vous puissiez adapter l'apparence de votre tableau à vos besoins spécifiques. Voici comment chaque personnalisation affecte l'apparence du tableau :

- **customLabelSearch** : Cette personnalisation remplace le texte par défaut "Search Bar" dans la barre de recherche du tableau. Vous pouvez utiliser cette option pour localiser la barre de recherche dans la langue de votre choix.

- **customLabelFilter** : Cette personnalisation remplace le texte par défaut "Display By Page Number" dans la liste déroulante de filtre du tableau. Utilisez cette option pour personnaliser le libellé du filtre selon vos préférences.

- **customTextPrevious** et **customTextNext** : Ces personnalisations remplacent les textes par défaut "Previous" et "Next" des boutons de pagination. Personnalisez ces boutons pour correspondre au style et à la langue de votre application.

- **customEmptySearchMessage** : Lorsqu'une recherche ne renvoie aucun résultat, ce message personnalisé est affiché pour informer l'utilisateur qu'aucune correspondance n'a été trouvée. Personnalisez ce message pour l'adapter à votre application.

- **customSortedColumnBackgroundColor** : Cette personnalisation permet de définir une couleur de fond personnalisée pour la colonne triée.

- **customHoverBackgroundColor** : Lorsque l'utilisateur survole une cellule du tableau, cette personnalisation détermine la couleur de fond de la cellule en surbrillance.

- **customEvenRowBackgroundColor** : Cette personnalisation permet de définir la couleur de fond pour les lignes paires du tableau. Vous pouvez spécifier une couleur personnalisée pour toutes les lignes paires afin de créer un schéma de couleurs alternées distinct.

- **customDarkBackgroundColor** : Vous pouvez utiliser cette personnalisation pour définir une couleur de fond plus foncée.

- **customLightBackgroundColor** : À l'inverse, cette personnalisation vous permet de définir une couleur de fond plus claire.

En utilisant ces options de personnalisation, vous pouvez créer un tableau qui s'intègre parfaitement à l'apparence et au style de votre application, tout en offrant une expérience utilisateur fluide et intuitive.

```jsx
<SuperTable
  data={employeesData}
  columnsTable={customColumnsTable}
  customLabelSearch="Search"
  customLabelFilter="Show"
  customTextPrevious="Previous"
  customTextNext="Next"
  customEmptySearchMessage="No results found."
  customSortedColumnBackgroundColor="#ffff99"
  customHoverBackgroundColor="#93ad18"
  customDarkBackgroundColor="#5a6f08"
  customLightBackgroundColor="#d7ddbb"
  customEvenRowBackgroundColor="#d7ddbb"
/>
```

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable6.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable7.png)

<!-- Markdown -->
