// import React from "react";
// import { FiBook, FiCheckCircle, FiRefreshCw } from "react-icons/fi";

// import ListeLivre from "../components/ListeLivre";
// import ListeUser from "../components/ListeUser";


// function Dashboard() {
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">

//       {/* Title */}
//       <div className="mb-10 text-center">
//         <h1 className="text-2xl font-semibold text-green-800">
//           Tableau de bord
//         </h1>
//         <p className="mt-2 text-sm text-gray-500">
//           Gérez votre bibliothèque en toute simplicité
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">

//         {/* Card 1 */}
//         <div className="flex items-center justify-between rounded-xl bg-green-100 p-6">
//           <div>
//             <p className="text-sm text-green-700">Disponibles</p>
//             <p className="text-3xl font-bold text-green-800">905</p>
//             <p className="text-xs text-green-600">ce mois</p>
//           </div>
//           <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-200 text-green-700">
//             <FiBook size={20} />
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="flex items-center justify-between rounded-xl bg-orange-100 p-6">
//           <div>
//             <p className="text-sm text-orange-700">Emprunté</p>
//             <p className="text-3xl font-bold text-orange-800">905</p>
//             <p className="text-xs text-orange-600">ce mois</p>
//           </div>
//           <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-200 text-orange-700">
//             <FiRefreshCw size={20} />
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="flex items-center justify-between rounded-xl bg-green-100 p-6">
//           <div>
//             <p className="text-sm text-green-700">Disponibles</p>
//             <p className="text-3xl font-bold text-green-800">905</p>
//             <p className="text-xs text-green-600">ce mois</p>
//           </div>
//           <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-200 text-green-700">
//             <FiCheckCircle size={20} />
//           </div>
//         </div>

//       </div>

//       {/* Liste Livres */}
//       <ListeLivre />

//       {/* Liste Users */}
//       <ListeUser/>

//     </div>
//   );
// }

// export default Dashboard;



import React from "react";
import { FiBook, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import ListeLivre from "../components/ListeLivre";
import ListeUser from "../components/ListeUser";

function Dashboard() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="ml-64 w-full p-8 bg-gray-50 min-h-screen">

        {/* Title */}
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-semibold text-green-800">
            Tableau de bord
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Gérez votre bibliothèque en toute simplicité
          </p>
        </div>

        {/* Cards */}
        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="flex items-center justify-between rounded-xl bg-green-100 p-6">
            <div>
              <p className="text-sm text-green-700">Disponibles</p>
              <p className="text-3xl font-bold text-green-800">905</p>
              <p className="text-xs text-green-600">ce mois</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-200 text-green-700">
              <FiBook size={20} />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-orange-100 p-6">
            <div>
              <p className="text-sm text-orange-700">Emprunté</p>
              <p className="text-3xl font-bold text-orange-800">905</p>
              <p className="text-xs text-orange-600">ce mois</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-200 text-orange-700">
              <FiRefreshCw size={20} />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-green-100 p-6">
            <div>
              <p className="text-sm text-green-700">Disponibles</p>
              <p className="text-3xl font-bold text-green-800">905</p>
              <p className="text-xs text-green-600">ce mois</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-200 text-green-700">
              <FiCheckCircle size={20} />
            </div>
          </div>

        </div>

        <ListeLivre />
        <ListeUser />

      </div>
    </div>
  );
}

export default Dashboard;
