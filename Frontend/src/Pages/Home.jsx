import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      <div className="mx-auto mt-14 max-w-7xl px-6">
        <h2 className="mb-6 text-lg font-semibold">Liste des livres</h2>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* CARD 1 */}
          <div className="rounded-xl border bg-white shadow-sm">
            <div className="p-3">
              <img
                src="./public/LIVRE2.jpg"
                className="h-44 w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-semibold">Le Petit Prince</h3>
              <p className="mt-1 text-xs text-gray-500">
                Antoine de Saint-Exupéry
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-medium text-green-600">
                    Disponible
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  Emprunter
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl border bg-white shadow-sm">
            <div className="p-3">
              <img
                src="./public/LIVREA4.jpg"
                className="h-44 w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-semibold">Le Petit Prince</h3>
              <p className="mt-1 text-xs text-gray-500">
                Antoine de Saint-Exupéry
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-medium text-green-600">
                    Disponible
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  Emprunter
                </span>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl border bg-white shadow-sm">
            <div className="p-3">
              <img
                src="./public/LIVRE2.jpg"
                className="h-44 w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-semibold">Le Petit Prince</h3>
              <p className="mt-1 text-xs text-gray-500">
                Antoine de Saint-Exupéry
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-medium text-green-600">
                    Disponible
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  Emprunter
                </span>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="rounded-xl border bg-white shadow-sm">
            <div className="p-3">
              <img
                src="./public/livre.jpg"
                className="h-44 w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-semibold">Le Petit Prince</h3>
              <p className="mt-1 text-xs text-gray-500">
                Antoine de Saint-Exupéry
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-medium text-green-600">
                    Disponible
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  Emprunter
                </span>
              </div>
            </div>
          </div>


          <div className="rounded-xl border bg-white shadow-sm">
            <div className="p-3">
              <img
                src="./public/livre.jpg"
                className="h-44 w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-semibold">Le Petit Prince</h3>
              <p className="mt-1 text-xs text-gray-500">
                Antoine de Saint-Exupéry
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-medium text-green-600">
                    Disponible
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  Emprunter
                </span>
              </div>
            </div>
          </div>




          <div className="rounded-xl border bg-white shadow-sm">
            <div className="p-3">
              <img
                src="./public/livre.jpg"
                className="h-44 w-full rounded-lg object-cover"
              />
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-sm font-semibold">Le Petit Prince</h3>
              <p className="mt-1 text-xs text-gray-500">
                Antoine de Saint-Exupéry
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-xs font-medium text-green-600">
                    Disponible
                  </span>
                </div>
                <span className="text-xs font-medium text-blue-600">
                  Emprunter
                </span>
              </div>
            </div>
          </div>
        </div>





        {/* PAGINATION */}
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
