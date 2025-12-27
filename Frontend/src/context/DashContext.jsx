



import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const DashContext = createContext();

export const DashProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Livres
  const getBooks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (e) {
      console.error("Erreur getBooks", e);
    } finally {
      setLoading(false);
    }
  };

  const getBookById = async (id) => {
    try {
      const res = await api.get(`/books/${id}`);
      return res.data;
    } catch (e) {
      console.error("Erreur getBookById", e);
      return null;
    }
  };

  const getCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data);
    } catch (e) {
      console.error("Erreur getCategories", e);
    }
  };

  const addBook = async (bookData) => {
    try {
      const formData = new FormData();
      formData.append("title", bookData.title);
      formData.append("author", bookData.author);
      formData.append("description", bookData.description || "");
      formData.append("category_id", bookData.category_id);
      formData.append("stock", bookData.stock || 0); // ajout stock
      if (bookData.image) formData.append("image", bookData.image);

      const res = await api.post("/books", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setBooks((prev) => [...prev, res.data]);
      return { success: true };
    } catch (e) {
      console.error("Erreur addBook", e);
      return { success: false };
    }
  };

  const updateBook = async (id, formData) => {
    try {
      const res = await api.post(`/books/${id}?_method=PUT`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setBooks((prev) =>
        prev.map((b) => (b.id === id ? res.data : b))
      );

      return { success: true };
    } catch (e) {
      console.error("Erreur updateBook", e);
      return { success: false };
    }
  };

  const deleteBook = async (id) => {
    if (!window.confirm("Supprimer ce livre ?")) return;
    try {
      await api.delete(`/books/${id}`);
      setBooks((prev) => prev.filter((b) => b.id !== id));
    } catch (e) {
      console.error("Erreur deleteBook", e);
    }
  };

  // 🔹 Utilisateurs
  const getUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (e) {
      console.error("Erreur getUsers", e);
    }
  };

  // 🔹 Supprimer un utilisateur
const deleteUser = async (id) => {
  if (!window.confirm("Supprimer cet utilisateur ?")) return;

  try {
    await api.delete(`/users/${id}`);
    setUsers((prev) => prev.filter((u) => u.id !== id));
  } catch (e) {
    console.error("Erreur deleteUser", e);
    alert("Impossible de supprimer cet utilisateur");
  }
};


  // 🔹 Stats
  const stats = {
    total: books.length,
    disponibles: books.filter((b) => !b.is_borrowed).length,
    empruntes: books.filter((b) => b.is_borrowed).length,
    totalStock: books.reduce((acc, b) => acc + Number(b.stock || 0), 0), // stock total
  };

  useEffect(() => {
    getBooks();
    getUsers();
    getCategories();
  }, []);

  return (
    <DashContext.Provider
      value={{
        books,
        users,
        categories,
        stats,
        loading,
        getBooks,
        getBookById,
        addBook,
        updateBook,
        deleteBook,
        deleteUser,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useDash = () => useContext(DashContext);
