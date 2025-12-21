// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/axios";

// const DashContext = createContext();

// export const DashProvider = ({ children }) => {
//   const [livres, setLivres] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [stats, setStats] = useState({
//     disponibles: 0,
//     empruntes: 0,
//     total: 0,
//   });

//   const [loading, setLoading] = useState(false);

//   /* ===================== LIVRES ===================== */

//   const getLivres = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/books");
//       setLivres(res.data.data || res.data);
//     } catch (error) {
//       console.error("Erreur getLivres", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const ajouterLivre = async (data) => {
//     await api.post("/books", data);
//     getLivres(); // refresh
//   };

//   const modifierLivre = async (id, data) => {
//     await api.put(`/books/${id}`, data);
//     getLivres();
//   };

//   const supprimerLivre = async (id) => {
//     await api.delete(`/books/${id}`);
//     setLivres((prev) => prev.filter((l) => l.id !== id));
//   };

//   /* ===================== USERS ===================== */

//   const getUsers = async () => {
//     try {
//       const res = await api.get("/users");
//       setUsers(res.data.data || res.data);
//     } catch (error) {
//       console.error("Erreur getUsers", error);
//     }
//   };

//   /* ===================== STATS ===================== */

//   const getStats = async () => {
//     try {
//       const res = await api.get("/dashboard/stats");
//       setStats(res.data);
//     } catch (error) {
//       console.error("Erreur stats", error);
//     }
//   };

//   /* ===================== INIT ===================== */

//   useEffect(() => {
//     getLivres();
//     getUsers();
//     getStats();
//   }, []);

//   return (
//     <DashContext.Provider
//       value={{
//         livres,
//         users,
//         stats,
//         loading,
//         getLivres,
//         ajouterLivre,
//         modifierLivre,
//         supprimerLivre,
//       }}
//     >
//       {children}
//     </DashContext.Provider>
//   );
// };

// export const useDash = () => useContext(DashContext);




// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/axios";

// const DashContext = createContext();

// export const DashProvider = ({ children }) => {
//   const [livres, setLivres] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [stats, setStats] = useState({
//     disponibles: 0,
//     empruntes: 0,
//     total: 0,
//   });
//   const [loading, setLoading] = useState(false);

//   /* ===================== LIVRES ===================== */

//   const getLivres = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/books");
//       setLivres(res.data.data || res.data);
//     } catch (error) {
//       console.error("Erreur getLivres", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const ajouterLivre = async (data) => {
//     await api.post("/books", data);
//     getLivres();
//   };

//   const modifierLivre = async (id, data) => {
//     await api.put(`/books/${id}`, data);
//     getLivres();
//   };

//   const supprimerLivre = async (id) => {
//     await api.delete(`/books/${id}`);
//     setLivres((prev) => prev.filter((l) => l.id !== id));
//   };

//   /* ===================== USERS ===================== */

//   const getUsers = async () => {
//     try {
//       const res = await api.get("/users");
//       setUsers(res.data.data || res.data);
//     } catch (error) {
//       console.error("Erreur getUsers", error);
//     }
//   };

//   /* ===================== STATS ===================== */

//   const getStats = async () => {
//     try {
//       const res = await api.get("/dashboard/stats");
//       setStats(res.data);
//     } catch (error) {
//       console.error("Erreur stats", error);
//     }
//   };

//   useEffect(() => {
//     getLivres();
//     getUsers();
//     getStats();
//   }, []);

//   return (
//     <DashContext.Provider
//       value={{
//         livres,
//         users,
//         stats,
//         loading,
//         getLivres,
//         getUsers,
//         getStats,
//         ajouterLivre,
//         modifierLivre,
//         supprimerLivre,
//       }}
//     >
//       {children}
//     </DashContext.Provider>
//   );
// };

// export const useDash = () => useContext(DashContext);






// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/axios";

// const DashContext = createContext();

// export const DashProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // 🔹 LISTE DES LIVRES
//   const getBooks = async () => {
//     try {
//       setLoading(true);
//       const res = await api.get("/books");
//       setBooks(res.data);
//     } catch (err) {
//       setError("Erreur lors du chargement des livres");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 SUPPRIMER LIVRE (ADMIN)
//   const deleteBook = async (id) => {
//     await api.delete(`/books/${id}`);
//     getBooks();
//   };

//   // 🔹 AJOUTER LIVRE (ADMIN)
//   const addBook = async (data) => {
//     await api.post("/books", data);
//     getBooks();
//   };

//   // 🔹 MODIFIER LIVRE (ADMIN)
//   const updateBook = async (id, data) => {
//     await api.put(`/books/${id}`, data);
//     getBooks();
//   };

//   useEffect(() => {
//     getBooks();
//   }, []);

//   return (
//     <DashContext.Provider
//       value={{
//         books,
//         loading,
//         error,
//         getBooks,
//         deleteBook,
//         addBook,
//         updateBook,
//       }}
//     >
//       {children}
//     </DashContext.Provider>
//   );
// };

// export const useDash = () => useContext(DashContext);




// import { createContext, useContext, useEffect, useState } from "react";
// import api from "../api/axios";

// const DashContext = createContext();

// export const DashProvider = ({ children }) => {
//   const [books, setBooks] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getBooks = async () => {
//     setLoading(true);
//     const res = await api.get("/books");
//     setBooks(res.data);
//     setLoading(false);
//   };

// //   const getUsers = async () => {
// //     const res = await api.get("/users");
// //     setUsers(res.data.data);
// //   };


// const getUsers = async () => {
//   const res = await api.get("/users");
//   console.log("USERS RESPONSE:", res.data);
//   setUsers(res.data.data);
// };
//   const stats = {
//     total: books.length,
//     disponibles: books.filter(b => b.status === "disponible").length,
//     empruntes: books.filter(b => b.status === "emprunté").length,
//   };

//   useEffect(() => {
//     getBooks();
//     getUsers();
//   }, []);

//   return (
//     <DashContext.Provider
//       value={{
//         books,
//         users,
//         stats,
//         loading,
//         getBooks,
//       }}
//     >
//       {children}
//     </DashContext.Provider>
//   );
// };

// export const useDash = () => useContext(DashContext);



import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const DashContext = createContext();

export const DashProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Récupérer tous les livres
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

  // Ajouter un livre
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

      // Mettre à jour la liste locale
      setBooks((prev) => [...prev, res.data]);
      return { success: true };
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre :", error);
      return { success: false, error };
    }
  };

  // Supprimer un livre
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

  // Récupérer les utilisateurs
  const getUsers = async () => {
    try {
      const res = await api.get("/users");
      console.log("USERS RESPONSE:", res.data);
      setUsers(res.data.data);
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
        addBook,      // <-- Ajouté
        deleteBook,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export const useDash = () => useContext(DashContext);
