<!-- Markdown -->

# SuperTable : Bibliothèque JavaScript pour des Tables Personnalisées et Réactives

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable1.png)

## Introduction à SuperTable

SuperTable est une bibliothèque JavaScript puissante et polyvalente conçue pour simplifier l'affichage de données dans un tableau personnalisable à l'aide de React.

## Pourquoi utiliser SuperTable ?

### Gain de temps :

SuperTable vous permet de créer rapidement des tableaux personnalisés sans écrire de nombreuses lignes de code HTML et CSS. Gagnez du temps précieux en développement front-end.

### Flexibilité maximale :

Notre bibliothèque offre une flexibilité maximale pour personnaliser l'apparence et le comportement de vos tableaux. Personnalisez tous les aspects, des couleurs des cellules à la gestion des événements utilisateur.

### Interactivité avancée :

SuperTable inclut des fonctionnalités avancées pour rendre vos tableaux interactifs. Triez, filtrez et paginez vos données en un seul clic.

## Principales fonctionnalités de SuperTable

- **Personnalisation facile** : Personnalisez l'apparence de votre tableau en utilisant des thèmes prédéfinis ou en créant vos propres styles CSS.

- **Gestion des données** : SuperTable facilite la gestion des données, que vous affichiez des informations complexes, des données en temps réel ou des données provenant d'une API.

- **Intégration transparente** : Intégrez facilement SuperTable dans vos projets React existants.

## Fonctions Clés pour la Personnalisation

- **Fonction d'Édition** : Créez une fonction d'édition pour permettre aux utilisateurs de modifier les données directement depuis le tableau.

- **Fonction de Suppression** : Mettez en place une fonction de suppression pour permettre aux utilisateurs de supprimer des éléments du tableau en toute simplicité.

- **Adaptabilité Mobile** : SuperTable est conçu pour être réactif et s'adapter aux appareils mobiles. Les tableaux sont conviviaux sur les smartphones et les tablettes.

## Pour commencer

Pour commencer à utiliser SuperTableReact, suivez simplement ces étapes :

1. **Installation** : Installez SuperTableReact à l'aide de npm ou yarn.

```shell
npm i supertable-js-react
```

2. **Importation** : Importez la bibliothèque dans votre composant React.

```javascript
import SuperTable from "supertable-js-react";
```

3. **Utilisation** : Utilisez SuperTable pour créer et personnaliser votre tableau de données.
```jsx
<SuperTable data={yourData} />
```

## Personnalisation des colonnes

Pour personnaliser les colonnes de votre tableau avec SuperTable, vous devez fournir un tableau d'objets contenant trois propriétés : "key", "label", et éventuellement "type". Ces propriétés sont essentielles pour déterminer quelles données seront affichées dans le tableau et quelles étiquettes seront utilisées pour les en-têtes de colonnes. Voici comment vous pouvez expliquer cela :

"Pour personnaliser les colonnes de votre tableau avec SuperTableReact, vous devez créer un tableau d'objets appelé customColumnsTable. Chaque objet de ce tableau doit contenir trois propriétés :

- `key` : Cette propriété représente la clé de la colonne, qui doit correspondre à la clé des données que vous souhaitez afficher dans cette colonne.

- `label` : Cette propriété représente l'étiquette de la colonne, qui sera affichée en tant qu'en-tête de colonne dans le tableau."

- `type`  (optionnel) : Cette propriété permet de spécifier le type de données de la colonne, par exemple, "text" ou "date". Lors de l'utilisation du formulaire d'édition interne de la librairie, cette information peut être utile pour définir les contrôles de saisie appropriés et valider les données

```javascript
const customColumnsTable = [
  { key: "firstName", label: "First Name", type: "text" },
  { key: "lastName", label: "Last Name", type: "text" },
  { key: "birthDate", label: "Date of Birth", type: "date" },
  { key: "startDate", label: "Start Date", type: "date" },
  { key: "street", label: "Street", type: "text" },
  { key: "city", label: "City", type: "text" },
  { key: "state", label: "State", type: "text" },
  { key: "zipCode", label: "Zip Code", type: "number" },
  { key: "department", label: "Department", type: "text" },
];
```

Une fois que vous avez défini votre tableau customColumnsTable, vous pouvez le passer en tant que prop columnsTable à votre composant <SuperTable />. Voici comment vous pouvez l'utiliser dans votre code :

```jsx
<SuperTable data={yourData} columnsTable={customColumnsTable} />
```

En spécifiant ces colonnes personnalisées, vous avez un contrôle total sur les données que vous souhaitez afficher et les en-têtes de colonnes que vous souhaitez utiliser dans votre tableau.

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable8.png)

### Gestion des recherches vides

SuperTable inclut une gestion intelligente des cas où la barre de recherche ne trouve pas de correspondances dans les données affichées. Lorsqu'un utilisateur effectue une recherche qui ne renvoie aucun résultat, SuperTable affiche un message informatif pour informer l'utilisateur qu'aucune correspondance n'a été trouvée.

Ce message informatif est conçu pour améliorer l'expérience utilisateur en informant l'utilisateur que la recherche n'a pas donné de résultats et en l'encourageant à ajuster ses critères de recherche. Cela garantit une expérience utilisateur fluide et réduit toute confusion qui pourrait découler de recherches infructueuses.

SuperTable s'efforce de rendre la recherche et la navigation dans les données aussi simples et efficaces que possible, et la gestion des recherches vides en est un exemple. Cela aide les utilisateurs à trouver plus facilement les informations dont ils ont besoin tout en maintenant une interface utilisateur propre et intuitive.

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable4.png)

### Personnalisation de l'apparence du tableau

SuperTable offre une large gamme d'options de personnalisation pour que vous puissiez adapter l'apparence de votre tableau à vos besoins spécifiques. Voici comment chaque personnalisation affecte l'apparence du tableau :

- **customLabelSearch** : Cette personnalisation remplace le texte par défaut "Barre de recherche" dans la barre de recherche du tableau. Vous pouvez utiliser cette option pour localiser la barre de recherche dans la langue de votre choix.

- **customLabelFilter** : Cette personnalisation remplace le texte par défaut "Afficher par numéro de page" dans la liste déroulante de filtre du tableau. Utilisez cette option pour personnaliser le libellé du filtre selon vos préférences.

- **customTextPrevious** et **customTextNext** : Ces personnalisations remplacent les textes par défaut "Page précédente" et "Page suivante" sur les boutons de pagination. Personnalisez ces boutons pour les adapter au style et à la langue de votre application.

- **customEmptySearchMessage** : Lorsqu'une recherche ne renvoie aucun résultat, ce message personnalisé est affiché pour informer l'utilisateur qu'aucune correspondance n'a été trouvée. Personnalisez ce message pour qu'il corresponde à votre application.

- **customSortedColumnBackgroundColor** : Cette personnalisation vous permet de définir une couleur de fond personnalisée pour la colonne triée.

- **customHoverBackgroundColor** : Lorsqu'un utilisateur survole une cellule du tableau, cette personnalisation détermine la couleur de fond de la cellule mise en surbrillance.

- **customEvenRowBackgroundColor** : Cette personnalisation vous permet de définir la couleur de fond des lignes paires du tableau. Vous pouvez spécifier une couleur personnalisée pour toutes les lignes paires afin de créer un schéma de couleurs alternées distinctif.

- **customDarkBackgroundColor** : Vous pouvez utiliser cette personnalisation pour définir une couleur de fond plus sombre.

- **customLightBackgroundColor** : Inversement, cette personnalisation vous permet de définir une couleur de fond plus claire.

En utilisant ces options de personnalisation, vous pouvez créer un tableau qui s'intègre parfaitement à l'apparence et au style de votre application tout en offrant une expérience utilisateur fluide et intuitive.

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
  editButton
  deleteButton
  handleEditForm={handleEditForm}
  handleDeleteItem={handleDeleteItem}
/>
```

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable6.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable7.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable20.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable21.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable22.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable23.png)

### Adaptabilité Mobile

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable24.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable25.png)

## Personnalisation des Fonctions d'Édition et de Suppression dans SuperTable

SuperTable vous offre la possibilité de personnaliser les fonctions d'édition et de suppression pour permettre aux utilisateurs de modifier et de supprimer des éléments directement depuis le tableau. Voici comment procéder :

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable26.png)

## Mots-clés

- Data display
- React library
- Customizable table
- JavaScript
- Front-end development
- Data management
- Filter
- Search
- Pagination

<!-- Markdown -->
