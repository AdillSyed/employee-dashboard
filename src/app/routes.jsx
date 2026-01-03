import { Routes, Route } from "react-router-dom";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Employees from "../employees/Employees";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/employees" element={<ProtectedRoute><Employees /></ProtectedRoute>} />
    </Routes>
  );
}
