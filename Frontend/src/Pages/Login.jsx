import React from 'react'

function Login() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-8 py-10">

    {/* Title */}
    <h1 className="text-3xl font-bold text-center text-green-800">
      Connexion
    </h1>
    <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
      Bienvenue sur BookTrack
    </p>

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
          placeholder="votre@email.com"
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
          placeholder="••••••••"
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
        />
      </div>
    </div>

    {/* Forgot password */}
    <div className="text-right mb-6">
      <a href="#" className="text-sm text-green-700 hover:underline">
        Mot de passe oublié ?
      </a>
    </div>

    {/* Button */}
    <button className="w-full bg-green-900 hover:bg-green-800 text-white py-3 rounded-lg font-medium shadow-md transition">
      Se connecter
    </button>

    {/* Register */}
    <div className="text-center mt-6 text-sm text-gray-500">
      Pas encore de compte ?{" "}
      <a href="#" className="text-green-800 font-medium hover:underline">
        Créer un compte
      </a>
    </div>

  </div>
</div>

    
    </>
  )
}

export default Login
