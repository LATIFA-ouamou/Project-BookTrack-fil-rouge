
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBooks } from "../context/BookContext";
import HeroSection from "../Components/common/HeroSection";

export default function Home() {
  const { user } = useAuth();
  const { books, loading, error, fetchBooks } = useBooks();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const BOOKS_PER_PAGE = 8;

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
   <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100">
  <HeroSection
    search={search}
    setSearch={setSearch}
    onSearch={handleSearch}
    onReset={handleReset}
  />

  <div className="mx-auto mt-16 max-w-7xl px-6">
    <h1 className="mb-10 text-center text-3xl font-extrabold text-[#203E11]">
      📚 Catalogue des livres
    </h1>

    {error && (
      <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow">
        {error}
      </div>
    )}

    {loading ? (
      <p className="text-center text-sm font-medium text-[#203E11]">
        Chargement des livres...
      </p>
    ) : (
      <>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentBooks.map((book) => (
            <div
              key={book.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={book.image || "/livre.jpg"}
                alt={book.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-[#203E11] line-clamp-2">
                  {book.title}
                </h3>

                <p className="text-sm text-gray-600">
                  👤 {book.author}
                </p>

                <button
                  type="button"
                  onClick={() => navigate(`/books/${book.id}`)}
                  className="w-full rounded-xl border border-yellow-600 bg-yellow-700 py-2 text-sm font-semibold text-white transition hover:bg-yellow-500"
                >
                  Voir détails
                </button>

                {user?.role === "user" &&
                book.stock > 0 &&
                !book.is_borrowed ? (
                  <button
                    type="button"
                    onClick={() => navigate(`/borrow/${book.id}`)}
                    className="w-full rounded-xl bg-[#203E11] py-2 text-sm font-semibold text-white transition hover:bg-[#1A330E]"
                  >
                    Emprunter
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full cursor-not-allowed rounded-xl bg-gray-300 py-2 text-sm font-semibold text-gray-600"
                  >
                    Indisponible
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
             className=" bg-[#203E11] rounded-xl border  px-5 py-2 text-sm font-medium text-[#FFFFFF] transition hover:bg-[#33641a] hover:text-white disabled:opacity-40 m-10"
            >
              ← Précédent
            </button>

            <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold shadow">
              Page {currentPage} / {totalPages}
            </span>

            <button
              type="button"
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className=" bg-[#203E11] rounded-xl border  px-5 py-2 text-sm font-medium text-[#FFFFFF] transition hover:bg-[#33641a] hover:text-white disabled:opacity-40 m-10"
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
