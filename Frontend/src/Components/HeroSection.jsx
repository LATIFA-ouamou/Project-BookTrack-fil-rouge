// import React from 'react'
// function HeroSection() {
// return (
// <section className="mx-auto mt-8 max-w-7xl px-6">
// <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-green-100 p-10 md:flex-row">
// <div className="max-w-xl">
// <h1 className="text-3xl font-bold text-green-900">Découvrez notre bibliothèque</h1>
// <p className="mt-3 text-sm text-green-800">
// Explorez notre collection de livres et gérez vos emprunts facilement
// </p>


// <div className="mt-6 flex gap-4">
// <button className="rounded-md bg-green-800 px-5 py-2 text-sm font-medium text-white hover:bg-green-900">
// Parcourir les livres
// </button>
// <button className="rounded-md border border-green-800 px-5 py-2 text-sm font-medium text-green-800 hover:bg-green-50">
// Mes emprunts
// </button>
// </div>
// </div>


// <div className="rounded-2xl border-2 border-green-700 bg-white p-4">
// <img
// src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
// alt="Books"
// className="h-40 w-56 rounded-xl object-cover"
// />
// </div>
// </div>
// </section>
// );
// }
// export default HeroSection


export default function HeroSection() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6">
      {/* <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg[#C9E3CC] p-11 md:flex-row"> */}
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#C9E3CC] p-11 md:flex-row">

        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-green-900">
            Découvrez notre bibliothèque
          </h1>
          <p className="mt-3 text-sm text-green-800">
            Explorez notre collection de livres et gérez vos emprunts facilement
          </p>

          <div className="mt-6 flex gap-4">
            <button className="rounded-md bg-green-800 px-5 py-2 text-sm text-white">
              Parcourir les livres
            </button>
            <button className="rounded-md border border-green-800 px-5 py-2 text-sm text-green-800">
              Mes emprunts
            </button>
          </div>
        </div>

        <div className="rounded-2xl border-5 border-green-900 bg-white p-4">
          <img
            src="./public/LIVRE2.jpg"
            className="h-60 w-90 rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
