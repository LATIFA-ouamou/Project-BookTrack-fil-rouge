// import React from 'react'
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <>
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//   <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 py-10">


//     <h1 className="text-3xl font-bold text-center text-green-800">
//       Connexion
//     </h1>
//     <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
//       Bienvenue sur BookTrack
//     </p>

 
//     <div className="mb-6">
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Email
//       </label>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//           ✉️
//         </span>
//         <input
//           type="email"
//           placeholder="votre@email.com"
//           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
//         />
//       </div>
//     </div>

   
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Mot de passe
//       </label>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//           🔒
//         </span>
//         <input
//           type="password"
//           placeholder="••••••••"
//           className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
//         />
//       </div>
//     </div>

   
//     <div className="text-right mb-6">
//       <a href="#" className="text-sm text-green-700 hover:underline">
//         Mot de passe oublié ?
//       </a>
//     </div>

  
//     <button className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-medium shadow-md transition">
//       Se connecter
//     </button>

  
//     <div className="text-center mt-6 text-sm text-gray-500">
//       Pas encore de compte ?{" "}
//       <Link
//   to="/register"
//   className="text-green-800 font-medium hover:underline"
// >
//   Créer un compte
// </Link>

//     </div>

//   </div>
// </div>

    
//     </>
//   )
// }

// export default Login





import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      navigate("/"); // ou dashboard
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
          Bienvenue sur BookTrack
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                ✉️
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                🔒
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="text-right mb-6">
            <span className="text-sm text-green-700 hover:underline cursor-pointer">
              Mot de passe oublié ?
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-medium shadow-md transition disabled:opacity-50"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>

        <div className="text-center mt-6 text-sm text-gray-500">
          Pas encore de compte ?{" "}
          <Link to="/register" className="text-green-800 font-medium hover:underline">
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
