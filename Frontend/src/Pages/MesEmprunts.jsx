import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function MesEmprunts() {
  const { user } = useAuth();
  const location = useLocation();

  const successMessage = location.state?.message;

  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [returnLoading, setReturnLoading] = useState(null);
  const [error, setError] = useState("");

  const fetchBorrows = async () => {
    try {
      const res = await api.get("/my-borrows");
      setBorrows(res.data);
    } catch {
      setError("Impossible de charger vos emprunts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBorrows();
  }, []);

  const handleReturn = async (bookId) => {
    setReturnLoading(bookId);
    setError("");

    try {
      await api.post(`/return/${bookId}`);
      await fetchBorrows();
    } catch {
      setError("Erreur lors du retour du livre");
    } finally {
      setReturnLoading(null);
    }
  };

  if (!user || user.role !== "user") {
    return (
      <div className="p-6 text-center text-gray-500">
        Accès non autorisé
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-2xl font-semibold">Mes emprunts</h1>

      {successMessage && (
        <div className="mb-6 rounded bg-green-50 p-3 text-sm text-green-700">
          {successMessage}
        </div>
      )}

      {error && (
        <div className="mb-6 rounded bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-sm text-gray-500">Chargement...</p>
      ) : borrows.length === 0 ? (
        <p className="text-sm text-gray-500">
          Vous n’avez aucun livre emprunté
        </p>
      ) : (
        <div className="space-y-4">
          {borrows.map((borrow) => (
            <div
              key={borrow.id}
              className="flex items-center justify-between rounded-xl border bg-white p-4 shadow-sm"
            >
              <div>
                <h3 className="text-sm font-semibold">
                  {borrow.book.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {borrow.book.author}
                </p>
              </div>

              <button
                onClick={() => handleReturn(borrow.book.id)}
                disabled={returnLoading === borrow.book.id}
                className="rounded-md bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 disabled:opacity-50"
              >
                {returnLoading === borrow.book.id
                  ? "Retour..."
                  : "Retourner"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
