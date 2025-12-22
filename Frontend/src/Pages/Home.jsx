
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import api from "../api/axios";

// import HeroSection from "../Components/HeroSection";
// import Footer from "../Components/Footer";

// export default function Home() {
//   const { user } = useAuth();

//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [borrowLoading, setBorrowLoading] = useState(null);
//   const [error, setError] = useState("");

//   const fetchBooks = async () => {
//     try {
//       const res = await api.get("/books");
//       setBooks(res.data);
//     } catch (err) {
//       setError("Impossible de charger les livres");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleBorrow = async (bookId) => {
//     setBorrowLoading(bookId);
//     setError("");

//     try {
//       await api.post(`/borrow/${bookId}`);
//       await fetchBooks(); // refresh liste
//     } catch (err) {
//       setError("Ce livre est déjà emprunté");
//     } finally {
//       setBorrowLoading(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <HeroSection />

//       <div className="mx-auto mt-14 max-w-7xl px-6">
//         <h2 className="mb-6 text-sm text-[#203E11]"></h2>
// <h1 className="mb-6 text-2 xl font-bold text-[#203E11]">
//           Liste des livres
//           </h1>
//         {error && (
//           <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
//             {error}
//           </div>
//         )}

//         {loading ? (
//           <p className="text-sm text-[#203E11]">Chargement...</p>
//         ) : (
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
//             {books.map((book) => (
//               <div
//                 key={book.id}
//                 className="rounded-xl border-[#203E11] bg-white shadow-sm"
//               >
//                 <div className="p-3">
//                   <img
//                     src={book.image || "/livre.jpg"}
//                     className="h-44 w-full rounded-lg object-cover"
//                   />
//                 </div>

//                 <div className="px-4 pb-4">
//                   <h3 className="text-sm font-semibold">{book.title}</h3>
//                   <p className="mt-1 text-xs font-bold text-yellow-600">
//                     {book.author}
//                   </p>

//                   <div className="mt-3 flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`h-2 w-2 rounded-full ${
//                           book.is_borrowed
//                             ? "bg-red-500"
//                             : "bg-green-600"
//                         }`}
//                       ></span>
//                       <span
//                         className={`text-xs font-medium ${
//                           book.is_borrowed
//                             ? "text-red-600"
//                             : "text-green-600"
//                         }`}
//                       >
//                         {book.is_borrowed ? "Emprunté" : "Disponible"}
//                       </span>
//                     </div>

                    
//                     {user?.role === "user" &&
//                       !book.is_borrowed && (
//                         <button
//                           onClick={() => handleBorrow(book.id)}
//                           disabled={borrowLoading === book.id}
//                           className="text-xs font-medium text-blue-600 hover:underline disabled:text-gray-400"
//                         >
//                           {borrowLoading === book.id
//                             ? "..."
//                             : "Emprunter"}
//                         </button>
//                       )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}












//         {/* Pagination  */}
//         <div className="mt-12 flex items-center justify-center gap-4 text-sm m-8">
//           <span className="cursor-pointer text-gray-400">‹</span>
//           <span className="flex h-7 w-7 items-center justify-center rounded-md bg-green-800 text-white">
//             1
//           </span>
//           <span className="cursor-pointer text-gray-500">2</span>
//           <span className="cursor-pointer text-gray-500">3</span>
//           <span className="cursor-pointer text-gray-400">›</span>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }










import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
    } catch {
      setError("Impossible de charger les livres");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <div className="mx-auto mt-14 max-w-7xl px-6">
        <h1 className="mb-6 text-2xl font-bold text-[#203E11]">
          Liste des livres
        </h1>

        {error && (
          <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <p className="text-sm text-[#203E11]">Chargement...</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="rounded-xl bg-white shadow-sm border"
              >
                <div className="p-3">
                  <img
                    src={book.image || "/livre.jpg"}
                    alt={book.title}
                    className="h-44 w-full rounded-lg object-cover"
                  />
                </div>

                <div className="px-4 pb-4">
                  <h3 className="text-sm font-semibold">{book.title}</h3>
                  <p className="mt-1 text-xs font-bold text-yellow-600">
                    {book.author}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          book.is_borrowed
                            ? "bg-red-500"
                            : "bg-green-600"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          book.is_borrowed
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {book.is_borrowed ? "Emprunté" : "Disponible"}
                      </span>
                    </div>

                    {user?.role === "user" && !book.is_borrowed && (
                      <button
                        onClick={() => navigate(`/borrow/${book.id}`)}
                        className="text-xs font-medium text-blue-600 hover:underline"
                      >
                        Emprunter
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination (statique) */}
        <div className="mt-12 flex items-center justify-center gap-4 text-sm">
          <span className="cursor-pointer text-gray-400">‹</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-green-800 text-white">
            1
          </span>
          <span className="cursor-pointer text-gray-500">2</span>
          <span className="cursor-pointer text-gray-500">3</span>
          <span className="cursor-pointer text-gray-400">›</span>
        </div>
      </div>

      <Footer />
    </div>
  );
}

