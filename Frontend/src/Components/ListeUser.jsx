// import React from "react";
// import { FiSearch, FiFilter, FiEdit2, FiTrash2, FiUser } from "react-icons/fi";

// function ListeUser() {
//   return (
//     <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">

//       {/* Header */}
//       <div className="mb-6 flex items-center justify-between">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Liste des utilisateurs
//         </h2>

//         <div className="flex items-center gap-3">
//           {/* Search */}
//           <div className="relative">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Rechercher..."
//               className="w-56 rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none focus:border-green-500"
//             />
//           </div>

//           {/* Filter */}
//           <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-600 hover:bg-gray-200">
//             <FiFilter />
//             Filtrer
//           </button>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-hidden rounded-lg border border-gray-100">
//         <table className="w-full text-sm">
//           <thead className="bg-gray-50 text-left text-gray-500">
//             <tr>
//               <th className="px-6 py-3 font-medium">Utilisateur</th>
//               <th className="px-6 py-3 font-medium">Email</th>
//               <th className="px-6 py-3 font-medium">Rôle</th>
//               <th className="px-6 py-3 font-medium text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100">

//             {/* Row 1 */}
//             <tr className="hover:bg-gray-50">
//               <td className="px-6 py-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
//                     <FiUser />
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     Admin Principal
//                   </p>
//                 </div>
//               </td>
//               <td className="px-6 py-4 text-gray-700">
//                 admin@bibliotheque.com
//               </td>
//               <td className="px-6 py-4">
//                 <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
//                   Admin
//                 </span>
//               </td>
//               <td className="px-6 py-4">
//                 <div className="flex justify-center gap-4">
//                   <FiEdit2 className="cursor-pointer text-blue-600 hover:text-blue-800" />
//                   <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
//                 </div>
//               </td>
//             </tr>

//             {/* Row 2 */}
//             <tr className="hover:bg-gray-50">
//               <td className="px-6 py-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
//                     <FiUser />
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     Jean Dupont
//                   </p>
//                 </div>
//               </td>
//               <td className="px-6 py-4 text-gray-700">
//                 jean.dupont@gmail.com
//               </td>
//               <td className="px-6 py-4">
//                 <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
//                   Utilisateur
//                 </span>
//               </td>
//               <td className="px-6 py-4">
//                 <div className="flex justify-center gap-4">
//                   <FiEdit2 className="cursor-pointer text-blue-600 hover:text-blue-800" />
//                   <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
//                 </div>
//               </td>
//             </tr>

//             {/* Row 3 */}
//             <tr className="hover:bg-gray-50">
//               <td className="px-6 py-4">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
//                     <FiUser />
//                   </div>
//                   <p className="font-medium text-gray-800">
//                     Sara El Amrani
//                   </p>
//                 </div>
//               </td>
//               <td className="px-6 py-4 text-gray-700">
//                 sara.elamrani@gmail.com
//               </td>
//               <td className="px-6 py-4">
//                 <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
//                   Utilisateur
//                 </span>
//               </td>
//               <td className="px-6 py-4">
//                 <div className="flex justify-center gap-4">
//                   <FiEdit2 className="cursor-pointer text-blue-600 hover:text-blue-800" />
//                   <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
//                 </div>
//               </td>
//             </tr>

//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ListeUser;

import React from "react";
import { FiTrash2, FiUser } from "react-icons/fi";
import { useDash } from "../context/DashContext";

function ListeUser() {
  const { users, loading } = useDash();

  if (loading) {
    return (
      <div className="mt-10 text-center text-gray-500">
        Chargement des utilisateurs...
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Liste des utilisateurs
        </h2>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-6 py-3">Utilisateur</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Rôle</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <FiUser />
                    </div>
                    <span className="font-medium text-gray-800">
                      {user.name}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium
                      ${
                        user.role === "admin"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <FiTrash2 className="cursor-pointer text-red-500 hover:text-red-700" />
                  </div>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-6 text-center text-gray-400"
                >
                  Aucun utilisateur trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListeUser;
