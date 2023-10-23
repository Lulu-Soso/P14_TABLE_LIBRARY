import React, { useEffect } from "react";
import axios from "axios";
import SuperTable from "../lib/components/SuperTable";
import {
  setEmployeesData,
  setError,
  updateEmployee,
  deleteEmployee,
} from "../feature/employees.slice";
import { useDispatch, useSelector } from "react-redux";
// import SuperTable from "p14-test2-table-component-react/dist/components/SuperTable";
// import SuperTable from "supertable-react";

// *** CONSTANTS ***
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

const AppTestLibrary = () => {
  const employeesData = useSelector((state) => state.employees.employeesData);
  const dispatch = useDispatch();

  // *** DATA FETCHING ***
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/employees");
        console.log(response.data);
        dispatch(setEmployeesData(response.data));
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        dispatch(setError(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  const handleEditForm = async (item) => {
    try {
      console.log("Saving edited employee:", item);

      const response = await axios.put(
        `http://localhost:5001/employees/${item.id}`,
        item
      );

      console.log("Edit response:", response.data);
      dispatch(updateEmployee(response.data));
      //   dispatch(setEmployeesData(response.data));
      //   dispatch({ type: "SET_FORM_DATA", payload: response.data });
    } catch (error) {
      console.error("An error occurred while editing employee:", error);
    }
  };

  const handleDeleteItem = async (employeeId) => {
    try {
      console.log("Deleting employee with ID:", employeeId);

      const response = await axios.delete(
        `http://localhost:5001/employees/${employeeId}`
      );

      console.log("Delete response:", response.data);
    //   localStorage.setItem("employeesData", JSON.stringify(response.data));
      dispatch(deleteEmployee(employeeId));
    } catch (error) {
      console.error("An error occurred while deleting employee:", error);
    }
  };

  return (
    <>
      <div className="employees-header">
        <h2>Current Employees</h2>
      </div>
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
        handleEditForm={handleEditForm}
        handleDeleteItem={handleDeleteItem}
      />
    </>
  );
};

export default AppTestLibrary;
