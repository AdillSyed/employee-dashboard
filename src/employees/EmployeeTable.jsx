import EmployeeRow from "./EmployeeRow";
import EmptyState from "../components/EmptyState";

export default function EmployeeTable({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <EmptyState
        title="No employees found"
        description="Add your first employee to get started."
      />
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-left">
        <thead className="bg-slate-50">
          <tr className="text-sm text-slate-600">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Profile</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Gender</th>
            <th className="px-4 py-3">DOB</th>
            <th className="px-4 py-3">State</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <EmployeeRow key={emp.id} employee={emp} onEdit={onEdit} onDelete={onDelete}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
