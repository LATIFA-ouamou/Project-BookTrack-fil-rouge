import { useNavigate } from "react-router-dom";

export default function HeroSection({
  search,
  setSearch,
  onSearch,
  onReset,
}) {
  const navigate = useNavigate();

  return (
    <section
      className="w-full py-20 px-6 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/li.png')" }}
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#203E11]">
          Découvrez notre bibliothèque
        </h1>

        <p className="mt-3 text-base text-[#203E11]">
          Explorez notre collection de livres et gérez vos emprunts facilement
        </p>

        <div className="mt-6 flex gap-4">
          <button
            type="button"
            onClick={() => navigate("/MesEmprunts")}
            className="rounded-md bg-yellow-600 px-5 py-2 text-sm text-[#ffffff] hover:bg-[#108b12]"
          >
            Mes emprunts
          </button>

          <button
            type="button"
            onClick={() => {
              onReset();
              navigate("/");
            }}
            className="rounded-md bg-[#203E11] px-5 py-2 text-sm text-white hover:bg-[#15290c]"
          >
            Parcourir les livres
          </button>
        </div>

        <div className="mt-6 flex max-w-lg">
          <input
            type="text"
            placeholder="Rechercher un livre par nom..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white flex-1 px-6 py-3 border-2 border-gray-200 rounded-l-lg outline-none focus:border-[#203E11] text-gray-700"
          />

          <button
            type="button"
            onClick={onSearch}
            className="px-8 py-3 bg-[#203E11] text-white rounded-r-lg font-semibold hover:bg-[#15290c]"
          >
            Rechercher
          </button>
        </div>
      </div>
    </section>
  );
}
