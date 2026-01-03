import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const success = login(form);
      setLoading(false);

      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F7FB] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Employee Dashboard
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Sign in to manage employees
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-slate-100 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="admin@gmail.com"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-slate-100 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-md bg-indigo-500 py-2 text-white font-medium hover:bg-indigo-600 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-400 text-center">
          Demo: admin@gmail.com / admin123
        </p>
      </div>
    </div>
  );
}
