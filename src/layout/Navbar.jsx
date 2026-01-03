import { useAuth } from "../auth/authContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-slate-800">
        Employee Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="text-sm font-medium text-slate-600 hover:text-slate-900"
      >
        Logout
      </button>
    </header>
  );
}
