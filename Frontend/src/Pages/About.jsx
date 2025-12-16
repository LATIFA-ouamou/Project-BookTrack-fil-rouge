import React from "react";
import { FiBookOpen, FiTarget, FiLayers, FiZap, FiGrid, FiSmile, FiUsers } from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-50 to-emerald-100 p-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                À propos de <span className="text-green-700">BookTrack</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm text-gray-600">
                Une solution simple pour gérer et emprunter des livres en ligne.
              </p>
            </div>
            <div className="relative mx-auto">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-indigo-100">
                <div className="flex h-20 w-24 items-center justify-center rounded-xl bg-white shadow">
                  <FiBookOpen className="text-3xl text-green-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
            <FiTarget />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Notre mission</h2>
            <p className="mt-2 max-w-3xl text-sm text-gray-600">
              BookTrack aide les petites bibliothèques et associations à gérer leurs livres et leurs emprunts de manière numérique, moderne et accessible.
              Notre objectif est de simplifier la gestion des collections tout en offrant une expérience utilisateur fluide et intuitive pour les emprunteurs.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Fonctionnalités principales</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <FiLayers />
            </div>
            <h4 className="text-sm font-semibold">Gestion des livres</h4>
            <p className="mt-2 text-xs text-gray-600">Ajoutez, modifiez et organisez votre collection de livres en toute simplicité.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600">
              <FiZap />
            </div>
            <h4 className="text-sm font-semibold">Emprunts en un clic</h4>
            <p className="mt-2 text-xs text-gray-600">Système d'emprunt rapide et suivi automatique des retours.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
              <FiGrid />
            </div>
            <h4 className="text-sm font-semibold">Dashboard administrateur</h4>
            <p className="mt-2 text-xs text-gray-600">Visualisez les statistiques et gérez votre bibliothèque efficacement.</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
              <FiSmile />
            </div>
            <h4 className="text-sm font-semibold">Interface simple et intuitive</h4>
            <p className="mt-2 text-xs text-gray-600">Design moderne et facile à utiliser pour tous les profils.</p>
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h3 className="mb-6 text-lg font-semibold text-gray-900">Pour qui ?</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-green-100 bg-green-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <FiUsers />
            </div>
            <h4 className="text-sm font-semibold">Bibliothèques locales</h4>
            <p className="mt-1 text-xs text-gray-600">Digitalisez votre gestion</p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
              <FiUsers />
            </div>
            <h4 className="text-sm font-semibold">Bibliothèques scolaires</h4>
            <p className="mt-1 text-xs text-gray-600">Simplifiez les emprunts</p>
          </div>
          <div className="rounded-xl border border-purple-100 bg-purple-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white">
              <FiUsers />
            </div>
            <h4 className="text-sm font-semibold">Associations</h4>
            <p className="mt-1 text-xs text-gray-600">Organisez vos collections</p>
          </div>
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-6 text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white">
              <FiUsers />
            </div>
            <h4 className="text-sm font-semibold">Collecteurs de livres</h4>
            <p className="mt-1 text-xs text-gray-600">Gérez votre inventaire</p>
          </div>
        </div>
      </section>
    </div>
  );
}
