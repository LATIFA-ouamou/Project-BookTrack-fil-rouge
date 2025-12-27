import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

export default function BorrowForm() {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [borrowDate, setBorrowDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await api.post(`/borrow/${bookId}`, {
        borrow_date: borrowDate,
        expected_return_date: returnDate,
      });

      
      setSuccess("Emprunt confirmé avec succès ");

      
      setTimeout(() => {
        navigate("/MesEmprunts", {
          state: {
            message: "Votre livre a été emprunté avec succès 📚",
          },
        });
      }, 1500);

    } catch {
      setError("Erreur lors de la confirmation de l’emprunt");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="mb-6 text-xl font-semibold">
        Confirmer l’emprunt
      </h1>

      {error && (
        <div className="mb-4 rounded bg-red-50 p-2 text-sm text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 rounded bg-green-50 p-2 text-sm text-green-700">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Date d’emprunt</label>
          <input
            type="date"
            required
            className="w-full rounded border p-2"
            value={borrowDate}
            onChange={(e) => setBorrowDate(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Date de retour prévue</label>
          <input
            type="date"
            required
            className="w-full rounded border p-2"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded bg-green-700 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Confirmation..." : "Confirmer"}
        </button>
      </form>
    </div>
  );
}
