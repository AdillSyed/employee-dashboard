import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth.js";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const storedAuth =
    localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated || !storedAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}
