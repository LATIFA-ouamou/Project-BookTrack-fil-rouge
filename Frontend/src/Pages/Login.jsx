

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form);

     
      navigate("/");
    } catch (err) {
      setError("Email ou mot de passe incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 py-10">

       
        <h1 className="text-3xl font-bold text-center text-green-800">
          Connexion
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
          Accédez à votre espace BookTrack
        </p>

        
        {error && (
          <div className="mb-6 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        
        <form onSubmit={handleSubmit} className="space-y-6">

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                ✉️
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="exemple@email.com"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                🔒
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Forgot */}
          <div className="text-right text-sm">
            <span className="text-green-700 hover:underline cursor-pointer">
              Mot de passe oublié ?
            </span>
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-medium shadow-[0_8px_20px_rgba(22,101,52,0.4)] transition disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

       
        <div className="text-center mt-6 text-sm text-gray-500">
          Pas encore de compte ?{" "}
          <Link
            to="/register"
            className="text-green-800 font-medium hover:underline"
          >
            Créer un compte
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
