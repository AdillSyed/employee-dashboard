import { useEmployees } from "./employeeContext";
import { FilePenLine, Trash2 } from 'lucide-react';

export default function EmployeeRow({ employee, onEdit, onDelete }) {
  const { toggleStatus } = useEmployees();

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50 transition">
      <td className="px-4 py-3 text-sm">{employee.id}</td>

      <td className="px-4 py-3">
        {employee.image ? (
          <img
            src={employee.image}
            alt={employee.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
            {employee.name.charAt(0)}
          </div>
        )}
      </td>

      <td className="px-4 py-3 text-sm font-medium text-slate-800">
        {employee.name}
      </td>

      <td className="px-4 py-3 text-sm">{employee.gender}</td>

      <td className="px-4 py-3 text-sm text-slate-500">{employee.dob}</td>

      <td className="px-4 py-3 text-sm">{employee.state}</td>

      <td className="px-4 py-3">
        <button
          onClick={() => toggleStatus(employee.id)}
          className={`px-3 py-1 rounded-full text-xs font-medium print:hidden ${
            employee.isActive
              ? "bg-green-100 text-green-700"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {employee.isActive ? "Active" : "Inactive"}
        </button>
        <span className="hidden print:inline text-sm">
          {employee.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="px-4 py-3 text-sm space-x-2">
        <button
          onClick={() => onEdit(employee)}
          className="text-indigo-600 hover:underline"
          title="edit"
        >
          <FilePenLine size={16} />
        </button>
        <button
          onClick={() => onDelete(employee)}
          className="text-red-600 hover:underline"
          title="delete"
        >
          <Trash2 size={16}/>
        </button>
      </td>
    </tr>
  );
}
