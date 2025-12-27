import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";
import HeroSection from "../Components/HeroSection";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Charger tous les livres
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/books");
      setBooks(res.data);
    } catch {
      setError("❌ Impossible de charger les livres");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Recherche backend par titre
  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/books", {
        params: { search },
      });

      setBooks(res.data);
    } catch {
      setError("❌ Erreur lors de la recherche");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO avec recherche */}
      <HeroSection
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
      />

      <div className="mx-auto mt-14 max-w-7xl px-6">
        <h1 className="mb-6 text-2xl font-bold text-[#203E11]">
          📚 Liste des livres
        </h1>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-sm text-[#203E11]">Chargement...</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="rounded-xl bg-white shadow-lg border-2 border-[#203E11] overflow-hidden hover:shadow-2xl transition"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={book.image || "/livre.jpg"}
                    alt={book.title}
                    className="h-48 w-full object-cover"
                  />

                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs text-white ${
                      book.stock === 0 || book.is_borrowed
                        ? "bg-red-600"
                        : "bg-green-700"
                    }`}
                  >
                    {book.stock === 0 || book.is_borrowed
                      ? "Emprunté"
                      : "Disponible"}
                  </span>
                </div>

                {/* CONTENU */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-[#203E11]">
                    {book.title}
                  </h3>

                  <p className="text-sm text-gray-700">👤 {book.author}</p>
                  <p className="text-sm text-blue-700">
                    📚 {book.category?.name || "Sans catégorie"}
                  </p>
                  <p className="text-sm text-gray-700">
                    🔒 Stock : {book.stock}
                  </p>

                  {/* BOUTONS */}
                  <div className="pt-3 space-y-2">
                    <button
                      onClick={() => navigate(`/books/${book.id}`)}
                      className="w-full rounded-lg border border-[#203E11] py-2 text-sm font-medium text-[#203E11] hover:bg-[#203E11] hover:text-white transition"
                    >
                      Voir détails
                    </button>

                    {user?.role === "user" &&
                    book.stock > 0 &&
                    !book.is_borrowed ? (
                      <button
                        onClick={() => navigate(`/borrow/${book.id}`)}
                        className="w-full rounded-lg bg-[#203E11] py-2 text-white text-sm font-medium hover:bg-[#1A330E] transition"
                      >
                        Emprunter
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full rounded-lg bg-gray-300 py-2 text-sm text-gray-600 cursor-not-allowed"
                      >
                        Indisponible
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
