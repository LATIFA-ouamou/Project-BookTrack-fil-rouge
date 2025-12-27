import React from "react";
import {
  FiBookOpen,
  FiTarget,
  FiLayers,
  FiZap,
  FiGrid,
  FiSmile,
  FiUsers,
} from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-[#203E11]">
      {/* HERO */}
      <section className="mx-auto mt-10 max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-[#C9E3CC] p-11 border-2 border-[#203E11]/30 md:flex-row">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold">
              À propos de <span className="text-[#203E11]">BookTrack</span>
            </h1>
            <p className="mt-3 text-sm text-gray-700">
              Une solution moderne pour gérer, organiser et emprunter des livres en ligne.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-[#203E11] bg-white p-6 shadow-lg">
            <FiBookOpen className="text-5xl text-[#203E11]" />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#203E11] text-white">
            <FiTarget />
          </div>
          <div>
            <h2 className="text-lg font-bold">Notre mission</h2>
            <p className="mt-2 max-w-4xl text-sm text-gray-700 leading-relaxed">
              BookTrack aide les bibliothèques, écoles et associations à suivre leurs collections
              et emprunts grâce à une plateforme intuitive, sécurisée et facile à utiliser.
            </p>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="mx-auto mt-16 max-w-7xl px-6">
        <h3 className="mb-8 text-xl font-bold">Fonctionnalités principales</h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              icon: <FiLayers />,
              title: "Gestion des livres",
              text: "Ajoutez, organisez et suivez facilement vos ouvrages.",
            },
            {
              icon: <FiZap />,
              title: "Emprunts rapides",
              text: "Gestion automatique des réservations et retours.",
            },
            {
              icon: <FiGrid />,
              title: "Dashboard admin",
              text: "Vue d’ensemble, statistiques et actions administratives.",
            },
            {
              icon: <FiSmile />,
              title: "Interface intuitive",
              text: "Pensée pour être simple et agréable pour tous.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 border-2 border-[#203E11]/20 shadow-md hover:border-[#203E11] hover:shadow-lg transition"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C9E3CC] text-[#203E11]">
                {item.icon}
              </div>
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="mt-2 text-xs text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POUR QUI */}
      <section className="mx-auto mt-16 max-w-7xl px-6 pb-20">
        <h3 className="mb-8 text-xl font-bold">Pour qui ?</h3>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Bibliothèques locales",
            "Établissements scolaires",
            "Associations",
            "Collectionneurs de livres",
          ].map((title, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 text-center border-2 border-[#203E11]/20 shadow-md hover:border-[#203E11] hover:shadow-lg transition"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#203E11] text-white">
                <FiUsers />
              </div>
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="mt-1 text-xs text-gray-600">Gérez mieux, simplement.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
