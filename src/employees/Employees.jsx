import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";
import ConfirmDialog from "../components/ConfirmDialog";
import { filterEmployees } from "../utils/filters";
import { useEmployees } from "./employeeContext";

export default function Employees() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const { employees, deleteEmployee } = useEmployees();
    
  const filteredEmployees = filterEmployees(employees, {
    search,
    gender,
    status,
  });

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
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="border border-slate-300 px-4 py-2 rounded-md text-sm hover:bg-slate-100"
            >
              Print
            </button>

            <button
              onClick={() => {
                setSelectedEmployee(null);
                setOpenForm(true);
              }}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md text-sm"
            >
              + Add Employee
            </button>
          </div>
        {openForm && <EmployeeForm onClose={() => setOpenForm(false)} />}
      </div>

      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-md bg-slate-100 text-sm"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="px-3 py-2 rounded-md bg-slate-100 text-sm"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-2 rounded-md bg-slate-100 text-sm"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button
          onClick={() => {
            setSearch("");
            setGender("");
            setStatus("");
          }}
          className="text-sm text-slate-500 hover:underline"
        >
          Clear filters
        </button>
      </div>

      <EmployeeTable employees={filteredEmployees} onEdit={handleEdit} onDelete={setDeleteTarget}/>

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
