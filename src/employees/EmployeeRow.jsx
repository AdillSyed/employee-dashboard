import { useEmployees } from "./employeeContext";

export default function EmployeeRow({ employee }) {
  const { toggleStatus } = useEmployees();

  return (
    <tr className="border-t border-slate-100 hover:bg-slate-50">
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

      <td className="px-4 py-3 text-sm">{employee.dob}</td>

      <td className="px-4 py-3 text-sm">{employee.state}</td>

      <td className="px-4 py-3">
        <button
          onClick={() => toggleStatus(employee.id)}
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            employee.isActive
              ? "bg-green-100 text-green-700"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {employee.isActive ? "Active" : "Inactive"}
        </button>
      </td>

      <td className="px-4 py-3 text-sm text-slate-400">
        Edit · Delete · Print
      </td>
    </tr>
  );
}
