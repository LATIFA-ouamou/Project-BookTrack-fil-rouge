


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDash } from "../../context/DashContext";

function ModifierLivre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById, updateBook, categories } = useDash();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [stock, setStock] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBookById(id);
      if (book) {
        setTitle(book.title || "");
        setAuthor(book.author || "");
        setDescription(book.description || "");
        setCategoryId(book.category_id || "");
        setStock(book.stock || 0);
      }
    };
    fetchBook();
  }, [id, getBookById]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author || !categoryId || stock < 0) {
      alert("Veuillez remplir tous les champs obligatoires et le stock doit être >= 0.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("category_id", categoryId);
    formData.append("stock", stock);

    if (image) formData.append("image", image);
    formData.append("_method", "PUT");

    const result = await updateBook(id, formData);
    setLoading(false);

    if (result.success) {
      alert("Livre modifié avec succès !");
      navigate(-1);
    } else {
      alert("Erreur lors de la modification du livre.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl px-10 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-green-800">Modifier le livre</h1>
          <p className="text-gray-500 text-sm mt-2">Modifiez les informations du livre</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Titre *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Auteur *</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Catégorie *</label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="">-- Choisir une catégorie --</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">Stock *</label>
            <input
              type="number"
              min="0"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-600 resize-none"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Image de couverture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500"
            />
          </div>

          <div className="flex justify-end gap-4 border-t pt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-green-900 text-white hover:bg-green-800"
            >
              {loading ? "Mise à jour..." : "💾 Mettre à jour"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border rounded-lg"
            >
              Retour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModifierLivre;
