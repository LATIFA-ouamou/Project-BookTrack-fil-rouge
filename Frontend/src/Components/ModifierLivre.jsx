import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDash } from "../context/DashContext";

function ModifierLivre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById, updateBook } = useDash();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  /* 🔹 Charger le livre */
  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBookById(id);
      if (book) {
        setTitle(book.title);
        setAuthor(book.author);
        setDescription(book.description ?? "");
      }
    };
    fetchBook();
  }, [id, getBookById]);

  /* 🔹 Submit */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      alert("Veuillez remplir le titre et l'auteur.");
      return;
    }

    setLoading(true);

    /* ✅ FormData obligatoire */
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);

    /* ⚠️ Ajouter l’image seulement si elle existe */
    if (image) {
      formData.append("image", image);
    }

    /* ⚠️ Important pour Laravel */
    formData.append("_method", "PUT");

    const result = await updateBook(id, formData);

    setLoading(false);

    if (result.success) {
      alert("Livre modifié avec succès !");
      navigate(-1);
    } else {
      alert("Erreur lors de la modification.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl px-10 py-10">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">
            ✏️ Modifier le livre
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Modifiez les informations du livre
          </p>
        </div>

       
        <form onSubmit={handleSubmit}>
         
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Titre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Auteur <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 resize-none"
            />
          </div>

          
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">
              Image de couverture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500"
            />
            <p className="text-xs text-gray-400 mt-1">
              Laissez vide pour garder l’image actuelle
            </p>
          </div>

          
          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800"
            >
              {loading ? "Mise à jour..." : "💾 Mettre à jour"}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border rounded-lg"
            >
              ← Retour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifierLivre;
