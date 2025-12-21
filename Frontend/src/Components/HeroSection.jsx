


export default function HeroSection() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6">
      {/* <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg[#C9E3CC] p-11 md:flex-row"> */}
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#C9E3CC] p-11 md:flex-row">

        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-[#203E11]">
            Découvrez notre bibliothèque
          </h1>
          <p className="mt-3 text-sm text-[#203E11]">
            Explorez notre collection de livres et gérez vos emprunts facilement
          </p>

          <div className="mt-6 flex gap-4">
            <button className="rounded-md bg-yellow-600  px-5 py-2 text-sm text-white">
              Parcourir les livres
            </button>
            <button className="rounded-md border border-[#203E11] px-5 py-2 text-sm text-green-800">
              Mes emprunts
            </button>
           
            <div className="flex max-w-lg">
              <input
                type="text"
                placeholder="Rechercher ..."
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                // onKeyDown={handleKeyPress}
                className="bg-white flex-1 px-6 py-3 border-2 border-gray-200 rounded-l-lg outline-none focus:border-[#203E11] transition-colors text-gray-700"
              />
              <button 
                className="px-8 py-3 bg-[#203E11] text-white rounded-r-lg font-semibold hover:bg-[#203E11] transition-colors"
                // onClick={handleSearch}
              >
                Rechercher
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-5 border-[#203E11] bg-white p-4">
          <img
            src="./public/LIVRE2.jpg"
            className="h-60 w-90 rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
