import { FiBook, FiCheckCircle, FiRefreshCw } from "react-icons/fi";
import { useDash } from "../../context/DashContext";
import ListeLivre from "../../Components/ListeLivre";

function Dashboard() {
  const { stats } = useDash();

  return (
    <>
      {/* TITRE */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#203E11]">
          Tableau de bord
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Gérez votre bibliothèque en toute simplicité
        </p>
      </div>

      {/* CARTES */}
      <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Livres disponibles"
          value={stats.disponibles}
          icon={<FiBook size={22} />}
          variant="success"
        />

        <StatCard
          title="Livres empruntés"
          value={stats.empruntes}
          icon={<FiRefreshCw size={22} />}
          variant="warning"
        />

        <StatCard
          title="Total des livres"
          value={stats.total}
          icon={<FiCheckCircle size={22} />}
          variant="primary"
        />
      </div>

      <ListeLivre />
    </>
  );
}

/* ================= CARD ================= */

const StatCard = ({ title, value, icon, variant }) => {
  const styles = {
    success: {
      bg: "bg-green-100",
      iconBg: "bg-green-700",
      text: "text-green-900",
    },
    warning: {
      bg: "bg-yellow-100",
      iconBg: "bg-yellow-600",
      text: "text-yellow-900",
    },
    primary: {
      bg: "bg-[#203E11]/10",
      iconBg: "bg-[#203E11]",
      text: "text-[#203E11]",
    },
  };

  const s = styles[variant];

  return (
    <div
      className={`flex items-center justify-between rounded-xl p-6 shadow-md ${s.bg}`}
    >
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className={`text-3xl font-bold ${s.text}`}>{value}</p>
      </div>

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${s.iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
};

export default Dashboard;
