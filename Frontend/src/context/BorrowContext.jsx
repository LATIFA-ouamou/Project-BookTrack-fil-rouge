import { createContext, useContext, useState } from "react";
import api from "../api/axios";

const BorrowContext = createContext();

export function BorrowProvider({ children }) {
  const [borrows, setBorrows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 
  const fetchMyBorrows = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/my-borrows");
      setBorrows(res.data);
    } catch {
      setError("Impossible de charger vos emprunts");
    } finally {
      setLoading(false);
    }
  };

  
  const borrowBook = async (bookId, data) => {
    await api.post(`/borrow/${bookId}`, data);
  };

 
  const returnBook = async (bookId) => {
    await api.post(`/return/${bookId}`);
    await fetchMyBorrows();
  };

  return (
    <BorrowContext.Provider
      value={{
        borrows,
        loading,
        error,
        fetchMyBorrows,
        borrowBook,
        returnBook,
      }}
    >
      {children}
    </BorrowContext.Provider>
  );
}

export const useBorrows = () => useContext(BorrowContext);
