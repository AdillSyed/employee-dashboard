import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/authContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const storedAuth =
    localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated || !storedAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}
