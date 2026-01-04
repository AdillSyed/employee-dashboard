import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import ConfirmDialog from "../components/ConfirmDialog";
import { useEmployees } from "./employeeContext";

export default function Employees() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const { employees, deleteEmployee } = useEmployees();

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setOpenForm(true);
  };

  const handleDeleteConfirm = () => {
    deleteEmployee(deleteTarget.id);
    setDeleteTarget(null);
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-800">Employees</h2>
        <button
          onClick={() => {
            setSelectedEmployee(null);
            setOpenForm(true);
          }}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white"
        >
          + Add Employee
        </button>
        {openForm && <EmployeeForm onClose={() => setOpenForm(false)} />}
      </div>

      <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={setDeleteTarget}/>

      {openForm && (
        <EmployeeForm
          existingEmployee={selectedEmployee}
          onClose={() => setOpenForm(false)}
        />
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Delete Employee"
          message="This action cannot be undone."
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </AppLayout>
  );
}
