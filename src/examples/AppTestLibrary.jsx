import React, { useEffect } from "react";
import axios from "axios";
import SuperTable from "../lib/components/SuperTable";
import { setEmployeesData, setError } from "../feature/employees.slice";
import { useDispatch, useSelector } from "react-redux";

// *** CONSTANTS ***
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
];

const AppTestLibrary = () => {
  const employeesData = useSelector((state) => state.employees.employeesData);
  const dispatch = useDispatch();

  // *** DATA FETCHING ***
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/employees");
        console.log(response.data);
        dispatch(setEmployeesData(response.data));
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="app-container">
      <SuperTable
        data={employeesData}
        columnsTable={customColumnsTable}
        customLabelSearch="Search"
        customLabelFilter="Show"
        customTextPrevious="Previous"
        customTextNext="Next"
        customEmptySearchMessage="No results found."
        // customOddRowClass="custom-odd-row"
        // customSortedColumnBackgroundColor="#ffff99"
        // customHoverBackgroundColor="#93ad18"
        // customBackgroundColor="#5a6f08"
        // customOddRowBackgroundColor = "#d7ddbb"
      />
    </div>
  );
};

export default AppTestLibrary;
