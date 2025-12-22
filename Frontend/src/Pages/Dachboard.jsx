
// import React from "react";
// import { FiBook, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
// // import AjouterLivre from "../Components/AjouterLivre";
// import ModifierLivre from "../Components/ModifierLivre";
// import Sidebar from "../Components/Sidebar";
// import ListeLivre from "../Components/ListeLivre";
// import ListeUser from "../Components/ListeUser";

// function Dashboard() {
//   return (
//     <div className="flex">

    
//       <Sidebar/>

  
//       <div className="ml-64 w-full p-8 bg-gray-50 min-h-screen">

    
//         <div className="mb-10 text-center">
//           <h1 className="text-2xl font-semibold text-green-800">
//             Tableau de bord
//           </h1>
//           <p className="mt-2 text-sm text-gray-500">
//             Gérez votre bibliothèque en toute simplicité
//           </p>
//         </div>

   
//         <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">

//           <div className="flex items-center justify-between rounded-xl bg-green-100 p-6">
//             <div>
//               <p className="text-sm text-green-700">Disponibles</p>
//               <p className="text-3xl font-bold text-green-800">905</p>
//               <p className="text-xs text-green-600">ce mois</p>
//             </div>
//             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-200 text-green-700">
//               <FiBook size={20} />
//             </div>
//           </div>

//           <div className="flex items-center justify-between rounded-xl bg-orange-100 p-6">
//             <div>
//               <p className="text-sm text-orange-700">Emprunté</p>
//               <p className="text-3xl font-bold text-orange-800">905</p>
//               <p className="text-xs text-orange-600">ce mois</p>
//             </div>
//             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-200 text-orange-700">
//               <FiRefreshCw size={20} />
//             </div>
//           </div>

//           <div className="flex items-center justify-between rounded-xl bg-green-100 p-6">
//             <div>
//               <p className="text-sm text-green-700">Disponibles</p>
//               <p className="text-3xl font-bold text-green-800">905</p>
//               <p className="text-xs text-green-600">ce mois</p>
//             </div>
//             <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-200 text-green-700">
//               <FiCheckCircle size={20} />
//             </div>
//           </div>

//         </div>

//         <ListeLivre/>
//         <ListeUser/>
// {/* <AjouterLivre></AjouterLivre> */}
// {/* <ModifierLivre></ModifierLivre> */}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import { FiBook, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import Sidebar from "../Components/Sidebar";
import ListeLivre from "../Components/ListeLivre";
import ListeUser from "../Components/ListeUser";
import { useDash } from "../context/DashContext";

function Dashboard() {
  const { stats } = useDash();

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full p-8 bg-gray-50 min-h-screen">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-[#203E11]">
            Tableau de bord
          </h1>
          
          <p className="mt-2 text-sm text-gray-500">
            Gérez votre bibliothèque en toute simplicité
          </p>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Disponibles" value={stats.disponibles} icon={<FiBook />} />
          <Card title="Empruntés" value={stats.empruntes} icon={<FiRefreshCw />} orange />
          <Card title="Total" value={stats.total} icon={<FiCheckCircle />} />
        </div>

        <ListeLivre />
        
      </div>
    </div>
  );
}

const Card = ({ title, value, icon, orange }) => (
  <div className={`flex items-center justify-between rounded-xl p-6 ${orange ? "bg-orange-100" : "bg-green-100"}`}>
    <div>
      <p className="text-sm">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
    <div className="flex h-12 w-12 items-center justify-center rounded-lg">
      {icon}
    </div>
  </div>
);

export default Dashboard;
