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
      console.error(e);
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
      console.error("Erreur catégories", e);
    }
  };

 
  const addBook = async (bookData) => {
    try {
      const formData = new FormData();
      formData.append("title", bookData.title);
      formData.append("author", bookData.author);
      formData.append("description", bookData.description || "");
      formData.append("category_id", bookData.category_id);

      if (bookData.image) {
        formData.append("image", bookData.image);
      }

      const res = await api.post("/books", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setBooks((prev) => [...prev, res.data]);
      return { success: true };
    } catch (e) {
      console.error(e);
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
    await api.delete(`/books/${id}`);
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

 
  const getUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const stats = {
    total: books.length,
    disponibles: books.filter((b) => !b.is_borrowed).length,
    empruntes: books.filter((b) => b.is_borrowed).length,
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
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useDash = () => useContext(DashContext);
