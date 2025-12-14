// export default function Navbar() {
//   return (
//     <nav className="border-b bg-white">
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
//         <div className="flex items-center gap-2 font-semibold text-green-700">
//           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white">
//             📗
//           </div>
//           BookTrack
//         </div>

//         <div className="hidden gap-8 text-sm text-gray-600 md:flex">
//           <span className="text-green-700">Accueil</span>
//           <span>Mes emprunts</span>
//           <span>About</span>
//         </div>

//         <button className="rounded-md bg-green-800 px-5 py-2 text-sm text-white">
//           Connexion
//         </button>
//       </div>
//     </nav>
//   );
// }


export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-semibold text-green-700">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white">
            📗
          </div>
          BookTrack
        </div>

        <div className="hidden gap-8 text-sm text-gray-600 md:flex">
          <span className="text-green-700">Accueil</span>
          <span>Mes emprunts</span>
          <span>About</span>
        </div>

        <button className="rounded-md bg-green-800 px-5 py-2 text-sm text-white">
          Connexion
        </button>
      </div>
    </nav>
  );
}
