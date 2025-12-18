import React from "react";
import { useNavigate } from "react-router-dom";
function AjouterLivre() {
    const navigate = useNavigate();
  return (

    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
 
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-10 py-10">

        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800 flex items-center gap-2">
            ← Ajouter un livre
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Remplissez les informations ci-dessous pour ajouter un nouveau livre à votre bibliothèque
          </p>
        </div>

       
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Titre du livre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex : Le Petit Prince"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
          />
        </div>

       
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Auteur <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Ex : Antoine de Saint-Exupéry"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
          />
        </div>

       
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            rows="4"
            placeholder="Décrivez brièvement le contenu du livre..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm resize-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            Facultatif – Maximum 500 caractères
          </p>
        </div>

        
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image de couverture
          </label>

          <div className="border-2 border-dashed border-green-700/50 rounded-lg py-10 text-center cursor-pointer hover:bg-green-50 transition">
            <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                ☁️
              </div>
              <p className="font-medium text-gray-600">
                Cliquez pour télécharger une image
              </p>
              <p className="text-xs">
                ou glissez-déposez <br /> PNG, JPG jusqu’à 5MB
              </p>
            </div>
          </div>
        </div>

       
        <div className="flex justify-end gap-4 border-t pt-6">
          {/* <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Annuler
          </button> */}
          <button className="px-6 py-2 rounded-lg bg-green-900 text-white font-medium shadow-[0_8px_20px_rgba(22,101,52,0.4)] hover:bg-green-800 transition">
            ✔ Enregistrer
          </button>
          
 <button
 onClick={() => navigate(-1)}
  className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
           ← Retour
          </button>
          
        </div>

      </div>
    </div>
  );
}

export default AjouterLivre;
