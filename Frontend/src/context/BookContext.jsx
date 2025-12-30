import { createContext, useContext, useState } from "react";
import api from "../api/axios";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async (search = "") => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/books", {
        params: search ? { search } : {},
      });

      setBooks(res.data);
    } catch {
      setError("Impossible de charger les livres");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookById = async (id) => {
    try {
      setLoading(true);
      setError("");
      const res = await api.get(`/books/${id}`);
      setBook(res.data);
    } catch {
      setBook(null);
      setError("Livre introuvable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        book,
        loading,
        error,
        fetchBooks,
        fetchBookById,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => useContext(BookContext);
