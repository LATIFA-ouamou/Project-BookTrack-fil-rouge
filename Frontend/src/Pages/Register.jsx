import React from 'react'

function Register() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 py-10">

    {/* Title */}
    <h1 className="text-2xl font-bold text-center text-green-800">
      Créer un compte
    </h1>
    <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
      Commencez votre aventure littéraire dès maintenant
    </p>

    {/* Nom complet */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Nom complet
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          👤
        </span>
        <input
          type="text"
          placeholder="Jean Dupont"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
        />
      </div>
    </div>

    {/* Email */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Adresse email
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          ✉️
        </span>
        <input
          type="email"
          placeholder="jean.dupont@exemple.fr"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
        />
      </div>
    </div>

    {/* Mot de passe */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Mot de passe
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔒
        </span>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
        />
      </div>
    </div>

    {/* Confirmer mot de passe */}
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Confirmer le mot de passe
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          🔒
        </span>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
        />
      </div>
    </div>

    {/* Button */}
    <button className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-medium shadow-[0_8px_20px_rgba(22,101,52,0.4)] transition">
      Créer un compte →
    </button>

    {/* Login link */}
    <div className="text-center mt-6 text-sm text-gray-500">
      Déjà inscrit ?{" "}
      <a href="#" className="text-green-800 font-medium hover:underline">
        Connexion
      </a>
    </div>

  </div>
</div>

    
    </>
  )
}

export default Register
