

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
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

    if (form.password !== form.password_confirmation) {
      setError("Les mots de passe ne correspondent pas");
      setLoading(false);
      return;
    }

    try {
      await register(form);
      navigate("/"); 
    } catch (err) {
      setError("Erreur lors de la création du compte");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 py-10">

        <h1 className="text-2xl font-bold text-center text-green-800">
          Créer un compte
        </h1>
        <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
          Commencez votre aventure littéraire dès maintenant
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
         
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

       
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

         
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

         
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-medium shadow-md transition disabled:opacity-50"
          >
            {loading ? "Création..." : "Créer un compte →"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          Déjà inscrit ?{" "}
          <Link to="/login" className="text-green-800 font-medium hover:underline">
            Connexion
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
