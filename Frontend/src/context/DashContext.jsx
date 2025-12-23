


import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const DashContext = createContext();

export const DashProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const getBooks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des livres :", error);
    } finally {
      setLoading(false);
    }
  };

 
  const addBook = async (bookData) => {
    try {
      const formData = new FormData();
      formData.append("title", bookData.title);
      formData.append("author", bookData.author);
      formData.append("description", bookData.description || "");
      if (bookData.image) formData.append("image", bookData.image);

      const res = await api.post("/books", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

     
      setBooks((prev) => [...prev, res.data]);
      return { success: true };
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre :", error);
      return { success: false, error };
    }
  };

  
  const deleteBook = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce livre ?")) return;

    try {
      await api.delete(`/books/${id}`);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("Impossible de supprimer le livre.");
    }
  };



 // 🔹 Modifier un livre
  const updateBook = async (id, bookData) => {
    try {
      const formData = new FormData();
      formData.append("title", bookData.title);
      formData.append("author", bookData.author);
      formData.append("description", bookData.description || "");
      formData.append("stock", bookData.stock || 0);
      if (bookData.image) formData.append("image", bookData.image);

      const res = await api.post(`/books/${id}?_method=PUT`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setBooks((prev) =>
        prev.map((b) => (b.id === id ? res.data : b))
      );
      return { success: true };
    } catch (error) {
      console.error("Erreur lors de la modification :", error);
      return { success: false, error };
    }
  };















 // 🔹 Récupérer un livre par ID
  const getBookById = async (id) => {
    try {
      const res = await api.get(`/books/${id}`);
      return res.data;
    } catch (error) {
      console.error("Erreur getBookById :", error);
      return null;
    }
  };





















  // affichage des users 
  const getUsers = async () => {
    try {
      const res = await api.get("/users");
      
      setUsers(res.data);
console.log("USERS RESPONSE:",res.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs :", error);
    }
  };
















  // Statistiques
  const stats = {
    total: books.length,
    disponibles: books.filter((b) => !b.is_borrowed).length,
    empruntes: books.filter((b) => b.is_borrowed).length,
  };

  useEffect(() => {
    getBooks();
    getUsers();
  }, []);

  return (
    <DashContext.Provider
      value={{
        books,
        users,
        stats,
        loading,
        getBooks,
        addBook,     
        deleteBook,
         updateBook, 
         getBookById,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useDash = () => useContext(DashContext);
