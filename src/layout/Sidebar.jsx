import { NavLink } from "react-router-dom";

const navItemClasses = ({ isActive }) =>
  `block rounded-md px-4 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-indigo-100 text-indigo-600"
      : "text-slate-600 hover:bg-slate-100"
  }`;

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-slate-200 min-h-[calc(100vh-56px)] p-4">
      <nav className="space-y-1">
        <NavLink to="/dashboard" className={navItemClasses}>
          Dashboard
        </NavLink>
        <NavLink to="/employees" className={navItemClasses}>
          Employees
        </NavLink>
      </nav>
    </aside>
  );
}
