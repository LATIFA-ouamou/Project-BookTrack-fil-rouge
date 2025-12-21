import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDash } from "../context/DashContext";

function AjouterLivre() {
  const navigate = useNavigate();
  const { addBook } = useDash();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author) {
      alert("Veuillez remplir le titre et l'auteur.");
      return;
    }

    setLoading(true);
    const result = await addBook({ title, author, description, image });
    setLoading(false);

    if (result.success) {
      alert("Livre ajouté avec succès !");
      navigate("/dashboard/liste-livres");
    } else {
      alert("Erreur lors de l'ajout du livre.");
    }
  };

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

        <form onSubmit={handleSubmit}>
         
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Titre du livre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex : Le Petit Prince"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
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
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-xs text-gray-400 mt-1">
              Facultatif – Maximum 500 caractères
            </p>
          </div>

         
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image de couverture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0 file:text-sm file:font-semibold
              file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
            />
          </div>

         
          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-green-900 text-white font-medium shadow-[0_8px_20px_rgba(22,101,52,0.4)] hover:bg-green-800 transition"
            >
              {loading ? "Enregistrement..." : "✔ Enregistrer"}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              ← Retour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AjouterLivre;
