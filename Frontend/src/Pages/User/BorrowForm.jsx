



import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useBorrows } from "../../context/BorrowContext";

export default function BorrowForm() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { borrowBook } = useBorrows();

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
      await borrowBook(bookId, {
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
  <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        📚 Confirmer l’emprunt
      </h1>

      {error && (
        <p className="mb-3 rounded-md bg-red-100 p-2 text-sm text-red-700">
          {error}
        </p>
      )}

      {success && (
        <p className="mb-3 rounded-md bg-green-100 p-2 text-sm text-green-700">
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">Date d’emprunt</label>
          <input
            type="date"
            required
            className="rounded-md border border-gray-300 p-2 focus:border-green-600 focus:outline-none"
            value={borrowDate}
            onChange={(e) => setBorrowDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-700">
            Date de retour prévue
          </label>
          <input
            type="date"
            required
            className="rounded-md border border-gray-300 p-2 focus:border-green-600 focus:outline-none"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded-md bg-green-700 py-2 text-white font-semibold shadow 
                    transition hover:bg-green-800 disabled:opacity-50"
        >
          {loading ? "Confirmation..." : "Confirmer l’emprunt"}
        </button>

      </form>
    </div>
  </div>
);

}



