import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

function DetailLivre() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await api.get(`/books/${id}`);
        setBook(res.data);
      } catch (error) {
        console.error("Erreur chargement livre", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  if (!book) {
    return <p className="text-center mt-10">Livre introuvable</p>;
  }

  return (
  <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow mt-10 m-20 ">
    <div className="flex flex-col md:flex-row gap-6">
      <img
        src={book.image || "/livre.jpg"}
        alt={book.title}
        className="w-full md:w-64 h-80 object-cover rounded-lg"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4 text-[#203E11]">
          {book.title}
        </h1>

        <p className="text-gray-700 mb-2">
          <strong>Auteur :</strong> {book.author}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Catégorie :</strong> {book.category?.name ?? "—"}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Stock :</strong> {book.stock}
        </p>

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{book.description}</p>
        </div>
      </div>
    </div>
  </div>
);

}

export default DetailLivre;
