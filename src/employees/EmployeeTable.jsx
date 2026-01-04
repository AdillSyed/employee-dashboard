import EmployeeRow from "./EmployeeRow";
import EmptyState from "../components/EmptyState";

export default function EmployeeTable({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <EmptyState
        title="No results found"
        description="Try adjusting your search or filters."
      />
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="max-h-[60vh] overflow-y-auto overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 sticky top-0 z-10">
            <tr className="text-sm text-slate-600  font-medium">
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
    </div>
  );
}
