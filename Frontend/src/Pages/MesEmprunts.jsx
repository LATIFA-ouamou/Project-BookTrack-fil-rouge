import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBorrows } from "../context/BorrowContext";

export default function MesEmprunts() {
  const { user } = useAuth();
  const { borrows, loading, error, fetchMyBorrows, returnBook } = useBorrows();
  const location = useLocation();

  const successMessage = location.state?.message;

  useEffect(() => {
    fetchMyBorrows();
  }, []);

  if (!user || user.role !== "user") {
    return (
      <div className="p-6 text-center text-gray-500">
        Accès non autorisé
      </div>
    );
  }

  const statusBadge = (status) => {
    switch (status) {
      case "late":
        return "bg-red-100 text-red-700";
      case "returned":
        return "bg-green-100 text-green-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const statusText = (status) => {
    switch (status) {
      case "late":
        return "⛔ En retard";
      case "returned":
        return "✅ Rendu";
      default:
        return "📚 Emprunté";
    }
  };

  const handleReturn = async (bookId) => {
    if (window.confirm("Êtes-vous sûr de vouloir retourner ce livre ?")) {
      await returnBook(bookId);
      // Recharger la liste après retour
      await fetchMyBorrows();
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-2xl font-bold text-[#203E11]">
        Mes emprunts
      </h1>

      {successMessage && (
        <div className="mb-6 rounded-lg bg-green-50 p-3 text-sm text-green-700">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-sm text-gray-500">Chargement...</p>
      ) : borrows.length === 0 ? (
        <p className="text-sm text-gray-500">
          Vous n'avez aucun livre emprunté
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {borrows.map((borrow) => (
            <div
              key={borrow.id}
              className="rounded-xl border bg-[#C9E3CC] shadow-sm"
            >
              <div className="p-3">
                <img
                  src={borrow.book.image || "/livre.jpg"}
                  alt={borrow.book.title}
                  className="h-44 w-full rounded-lg object-cover"
                />
              </div>

              <div className="px-4 pb-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {borrow.book.title}
                </h3>

                <p className="mt-1 text-xs font-bold text-yellow-700">
                  {borrow.book.author}
                </p>

                <div className="mt-2 text-xs text-gray-600 space-y-1">
                  <p>
                    📅 Emprunté le :
                    <span className="font-medium">
                      {" "}
                      {borrow.borrow_date}
                    </span>
                  </p>
                  <p>
                    ⏳ Retour prévu :
                    <span className="font-medium">
                      {" "}
                      {borrow.expected_return_date}
                    </span>
                  </p>
                  {borrow.return_date && (
                    <p>
                      📅 Rendu le :
                      <span className="font-medium">
                        {" "}
                        {borrow.return_date}
                      </span>
                    </p>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${statusBadge(
                      borrow.status
                    )}`}
                  >
                    {statusText(borrow.status)}
                  </span>

                 
                  {borrow.status !== 'returned' && (
                    <button
                      onClick={() => handleReturn(borrow.book.id)}
                      className="rounded-md bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      Retourner
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}