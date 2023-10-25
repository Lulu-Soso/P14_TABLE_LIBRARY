<!-- Markdown -->

# SuperTable : JavaScript Library for Customized and Responsive Tables

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable1.png)

## Introduction to SuperTable

SuperTable is a powerful and versatile JavaScript library designed to simplify data display in a customizable table using React.

## Why Use SuperTable?

### Time-Saving :

SuperTable allows you to quickly create custom tables without writing many lines of HTML and CSS code. Save precious front-end development time.

### Maximum Flexibility :

Our library offers maximum flexibility to customize the appearance and behavior of your tables. Customize every aspect, from cell colors to user event handling.

### Advanced Interactivity :

SuperTable includes advanced features to make your tables interactive. Sort, filter, and paginate your data with a single click.

## Key Features of SuperTable

- **Easy Customization** : Customize the appearance of your table using predefined themes or by creating your own CSS styles.

- **Data Management** : SuperTable makes data management easy, whether you're displaying complex information, real-time data, or data from an API.

- **Seamless Integration** : Seamlessly integrate SuperTable into your existing React projects with ease.

## Customization Functions

- **Edit Function** : Create an edit function to allow users to modify data directly from the table.

- **Delete Function** : Set up a delete function to enable users to remove items from the table effortlessly.

- **Mobile Adaptability** : SuperTable is designed to be responsive and adapt to mobile devices. Tables are user-friendly on smartphones and tablets.

## Getting Started

To start using SuperTableReact, simply follow these steps :

1. **Installation** : Install SuperTableReact using npm or yarn.

```shell
npm i supertable-react
```

2. **Import** : Import the library into your React component.

```javascript
import SuperTable from "supertable-react";
```

3. **Usage** : Use SuperTable to create and customize your data table.
```jsx
<SuperTable data={yourData} />
```

## Customizing Columns

To customize the columns of your table with SuperTable, you need to provide an array of objects containing three properties: "key," "label," and optionally "type." These properties are essential for determining what data will be displayed in the table, what labels will be used for column headers, and for advanced customization if needed.

Here's how you can explain this:

"To customize the columns of your table with SuperTableReact, you need to create an array of objects called customColumnsTable. Each object in this array must contain three properties:

- `key` : This property represents the column key, which should match the key of the data you want to display in this column.

- `label` : This property represents the column label, which will be displayed as the column header in the table.

- `type`  (optionnel) : This property allows you to specify the data type of the column, for example, "text" or "date." When using the library's internal edit form, this information can be useful for setting appropriate input controls and data validation."

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

Once you've defined your customColumnsTable array, you can pass it as the columnsTable prop to your <SuperTable /> component. Here's how you can use it in your code :

```jsx
<SuperTable data={yourData} columnsTable={customColumnsTable} />
```

By specifying these custom columns, you have full control over the data you want to display and the column headers you want to use in your table.

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable8.png)

### Handling Empty Searches

SuperTable includes intelligent handling of cases where the search bar doesn't find matches in the displayed data. When a user performs a search that returns no results, SuperTable displays an informative message to inform the user that no match was found.

This informative message is designed to enhance the user experience by letting them know that the search didn't yield any results and encouraging them to adjust their search criteria. This ensures a smooth user experience and reduces any confusion that may arise from unsuccessful searches.

SuperTable strives to make searching and navigating data as simple and efficient as possible, and handling empty searches is an example of that. It helps users find the information they need more easily while maintaining a clean and intuitive user interface.

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable4.png)

### Customizing Table Appearance

SuperTable offers a wide range of customization options so you can tailor the appearance of your table to your specific needs. Here's how each customization affects the table's appearance :

- **customLabelSearch** : This customization replaces the default text "Search Bar" in the table's search bar. You can use this option to localize the search bar in the language of your choice.

- **customLabelFilter** : This customization replaces the default text "Display By Page Number" in the table's filter dropdown. Use this option to customize the filter label to your preferences.

- **customTextPrevious** and **customTextNext** : These customizations replace the default "Previous Page" and "Next Page" texts on the pagination buttons. Customize these buttons to match your application's style and language.

- **customEmptySearchMessage** : When a search returns no results, this custom message is displayed to inform the user that no match was found. Customize this message to fit your application.

- **customSortedColumnBackgroundColor** : This customization allows you to set a custom background color for the sorted column.

- **customHoverBackgroundColor** : When a user hovers over a table cell, this customization determines the background color of the highlighted cell.

- **customEvenRowBackgroundColor** : This customization allows you to set the background color for even rows of the table. You can specify a custom color for all even rows to create a distinct alternating color scheme.

- **customDarkBackgroundColor** : You can use this customization to set a darker background color.

- **customLightBackgroundColor** : Conversely, this customization allows you to set a lighter background color.

By using these customization options, you can create a table that seamlessly fits the look and style of your application while providing a smooth and intuitive user experience.

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

### Mobile Adaptability

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable24.png)

![Alt text](https://raw.githubusercontent.com/Lulu-Soso/Github-Files/main/P14-Library/SuperTable25.png)

## Mobile Adaptability

SuperTable provides the ability to customize edit and delete functions to allow users to edit and delete items directly from the table. Here's how to do it:

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
