import { createContext, useContext, useEffect, useState } from "react";
import { loadEmployees, saveEmployees } from "./employeeService";

const EmployeeContext = createContext();

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => loadEmployees());

  useEffect(() => {
    saveEmployees(employees);
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prev) => [
      ...prev,
      { ...employee, id: Date.now() },
    ]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  const toggleStatus = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? { ...emp, isActive: !emp.isActive }
          : emp
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        toggleStatus,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export const useEmployees = () => useContext(EmployeeContext);
