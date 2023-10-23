import { createSlice } from "@reduxjs/toolkit";

// Récupère les données des employés depuis le localStorage
const employeesDataFromLocalStorage = JSON.parse(localStorage.getItem("employees"))
const employeeInfoFromLocalStorage = JSON.parse(localStorage.getItem("employeeInfo"))

const initialState = {
  employeesData: employeesDataFromLocalStorage || [],
  employeeInfo: employeeInfoFromLocalStorage || null,
  error: null,
  filteredResults: [],
  searchValue: "",
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    // setEmployeesData: (state, action) => {
    setEmployeesData: (state, { payload }) => {
      // state.employees = action.payload;
      state.employeesData = payload;
      localStorage.setItem("employees", JSON.stringify(state.employeesData));
    },
    addEmployee: (state, { payload }) => {
      state.employeesData.push(payload);
      localStorage.setItem("employeeInfo", JSON.stringify(payload));
      localStorage.setItem("employees", JSON.stringify(state.employeesData));
    },
    updateEmployee: (state, { payload }) => {
      state.employeesData = state.employeesData.map((employee) =>
        employee.id === payload.id ? payload : employee
      );
      localStorage.setItem("employeeInfo", JSON.stringify(payload.id));
      localStorage.setItem("employeesData", JSON.stringify(state.employeesData));
    },
    deleteEmployee: (state, { payload }) => {
      state.employeesData = state.employeesData.filter(
        (employee) => employee.id !== payload 
      );
      localStorage.setItem("employeesData", JSON.stringify(state.employeesData));
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setEntriesToShow: (state, { payload }) => {
      state.pagination.entriesToShow = payload;
    },
    setSearch: (state, { payload }) => {
      // Définit la valeur de recherche dans le state
      state.searchValue = payload;
      // Si une valeur de recherche est définie
      if (state.searchValue) {
        // Convertit la valeur de recherche en minuscules
        const searchValueLowerCase = state.searchValue.toLowerCase();
        // Filtre les résultats en fonction de la valeur de recherche
        state.filteredResults = state.employeesData.filter(employee =>
          // Vérifie si l'une des valeurs de l'employé contient la valeur de recherche
          Object.values(employee).some(value =>
            String(value).toLowerCase().includes(searchValueLowerCase)
          )
        );
      } else {
        // Si aucune valeur de recherche n'est définie, réinitialise les résultats filtrés
        state.filteredResults = [];
      }
    }, 
  },
});

export const {
  setEmployeesData,
  addEmployee,
  setError,
  setEntriesToShow,
  setSearch,
  updateEmployee,
  deleteEmployee
} = employeesSlice.actions;
export default employeesSlice.reducer;
