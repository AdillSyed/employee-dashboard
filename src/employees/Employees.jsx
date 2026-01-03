import AppLayout from "../layout/AppLayout";
import EmployeeTable from "./EmployeeTable";
import { useEmployees } from "./employeeContext";

export default function Employees() {
  const { employees } = useEmployees();

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">
          Employees
        </h2>

        <button className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600">
          + Add Employee
        </button>
      </div>

      <EmployeeTable employees={employees} />
    </AppLayout>
  );
}
