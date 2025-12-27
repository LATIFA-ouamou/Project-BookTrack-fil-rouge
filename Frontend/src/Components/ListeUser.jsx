import { FiTrash2, FiUser } from "react-icons/fi";
import { useDash } from "../context/DashContext";

function ListeUser() {
  const { users, loading, deleteUser } = useDash();

  if (loading) {
    return (
      <div className="text-center text-gray-500">
        Chargement...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold text-[#203E11]">
        Gestion des utilisateurs
      </h2>

      <div className="overflow-hidden rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-green-100 text-left text-[#203E11]">
            <tr>
              <th className="px-6 py-3">Utilisateur</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Rôle</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-[#203E11]/5 transition"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-[#203E11]">
                    <FiUser />
                  </div>
                  <span className="font-medium text-gray-800">
                    {user.name}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-700  px-3 py-1 text-xs font-medium text-black-700">
                    {user.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <FiTrash2
                    onClick={() => deleteUser(user.id)}
                    className="mx-auto cursor-pointer text-red-500 hover:text-red-700"
                    title="Supprimer l'utilisateur"
                  />
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
