




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBooks } from "../context/BookContext";
import HeroSection from "../Components/HeroSection";

export default function Home() {
  const { user } = useAuth();
  const { books, loading, error, fetchBooks } = useBooks();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const BOOKS_PER_PAGE = 6;

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchBooks(search);
  };

  const handleReset = () => {
    setSearch("");
    setCurrentPage(1);
    fetchBooks();
  };

  const indexOfLastBook = currentPage * BOOKS_PER_PAGE;
  const indexOfFirstBook = indexOfLastBook - BOOKS_PER_PAGE;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / BOOKS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        onReset={handleReset}
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
          <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
              {currentBooks.map((book) => (
                <div
                  key={book.id}
                  className="rounded-xl bg-white border-2 border-[#203E11] shadow-lg"
                >
                  <img
                    src={book.image || "/livre.jpg"}
                    alt={book.title}
                    className="h-48 w-full object-cover"
                  />

                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-[#203E11]">
                      {book.title}
                    </h3>

                    <p className="text-sm text-gray-700">
                      👤 {book.author}
                    </p>

                    <button
                      type="button"
                      onClick={() => navigate(`/books/${book.id}`)}
                      className="w-full rounded-lg  bg-yellow-600 py-2 text-sm text-[#ffffff] hover:bg-[#203E11] hover:text-white"
                    >
                      Voir détails
                    </button>

                    {user?.role === "user" &&
                    book.stock > 0 &&
                    !book.is_borrowed ? (
                      <button
                        type="button"
                        onClick={() => navigate(`/borrow/${book.id}`)}
                        className="w-full rounded-lg bg-[#203E11] py-2 text-white text-sm hover:bg-[#1A330E]"
                      >
                        Emprunter
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full rounded-lg bg-gray-300 py-2 text-sm text-gray-600"
                      >
                        Indisponible
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="m-10 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) => Math.max(p - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-[#203E11] rounded-lg"
                >
                  ← Précédent
                </button>

                <span className="text-sm font-medium">
                  Page {currentPage} / {totalPages}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((p) =>
                      Math.min(p + 1, totalPages)
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-[#203E11] rounded-lg"
                >
                  Suivant →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
