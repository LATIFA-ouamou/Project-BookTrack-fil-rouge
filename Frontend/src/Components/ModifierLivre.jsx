import React from "react";

function ModifierLivre() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-10 py-10">

       
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">
            Modifier un livre
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Modifiez les informations du livre sélectionné
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         
          <div className="border rounded-xl p-4 flex flex-col items-center text-center">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Couverture du livre
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mb-4">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
                alt="Couverture"
                className="h-56 object-cover rounded-md"
              />
            </div>

            <button className="flex items-center gap-2 text-green-800 text-sm font-medium hover:underline">
              📷 Modifier l’image
            </button>
          </div>

       
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Titre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="The Great Gatsby"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>

         
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Auteur <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="F. Scott Fitzgerald"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ISBN
              </label>
              <input
                type="text"
                defaultValue="978-0-7432-7356-5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>

          
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Année
              </label>
              <input
                type="number"
                defaultValue="1925"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>

            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows="4"
                defaultValue="Un chef-d'œuvre de la littérature américaine qui explore les thèmes de la richesse, de l'amour et du rêve américain dans les années 1920."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm resize-none"
              />
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix (€)
              </label>
              <input
                type="number"
                defaultValue="12.99"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock
              </label>
              <input
                type="number"
                defaultValue="25"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              />
            </div>

          </div>
        </div>

      
        <div className="flex justify-end gap-4 mt-10 border-t pt-6">
          <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Annuler
          </button>
          <button className="px-6 py-2 rounded-lg bg-green-900 text-white font-medium shadow-[0_8px_20px_rgba(22,101,52,0.4)] hover:bg-green-800 transition">
            💾 Mettre à jour
          </button>
        </div>

      </div>
    </div>
  );
}

export default ModifierLivre;
