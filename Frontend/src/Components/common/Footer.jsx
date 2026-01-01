import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#203E11]  text-gray-300">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

     
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-md bg-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">📚</span>
          </div>
          <h2 className="text-yellow-600 font-bold text-lg">BookTrack</h2>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
          Gérez votre bibliothèque personnelle facilement et efficacement.
        </p>
      </div>

      
      <div>
        <h3 className="text-yellow-600 font-bold mb-4">Liens rapides</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:text-white transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Mes emprunts
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              Connexion
            </a>
          </li>
        </ul>
      </div>

     
      <div>
        <h3 className="text-yellow-600 font-bold mb-4">Contact</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <span className="text-gray-400">✉️</span>
            <span>contact@booktrack.com</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-gray-400">📞</span>
            <span>+33 1 23 45 67 89</span>
          </li>
        </ul>
      </div>

    </div>

   
    <div className="border-t border-white/10 mt-10 pt-6 text-center">
      <p className="text-xs text-gray-500">
        © 2024 BookTrack. Tous droits réservés.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer
