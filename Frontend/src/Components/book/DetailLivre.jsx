

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../../context/BookContext";
import { useNavigate } from "react-router-dom";
function DetailLivre() {
  const { id } = useParams();
  const { book, loading, fetchBookById } = useBooks();
 const navigate = useNavigate();
  useEffect(() => {
    fetchBookById(id);
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  if (!book) {
    return <p className="text-center mt-10">Livre introuvable</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow mt-10 m-20">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.image || "/livre.jpg"}
          alt={book.title}
          className="w-full md:w-64 h-80 object-cover rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4 text-yellow-700">
            {book.title}
          </h1>

          <p className="text-[#20460d] mb-2">
            <strong>Auteur :</strong> {book.author}
          </p>

          <p className="text-[#20460d] mb-2">
            <strong>Catégorie :</strong> {book.category?.name ?? "—"}
          </p>

          <p className="text-[#20460d] mb-2">
            <strong>Stock :</strong> {book.stock}
          </p>

          
            {/* <h2 className="text-[#20460d] mb-2">Description</h2>
            <p className="text-[#20460d]">{book.description}</p> */}
         
         <p className="text-[#20460d] mb-2">
            <strong>Description :</strong> {book.description}
          </p>
          <button
                    type="button"
                    onClick={() => navigate(`/borrow/${book.id}`)}
                    className=" m-20 w-full rounded-xl bg-[#203E11] py-2 text-sm font-semibold text-white transition hover:bg-[#1A330E]"
                  >
                    Emprunter
                  </button>
        </div>
      </div>
    </div>
  );
}

export default DetailLivre;
