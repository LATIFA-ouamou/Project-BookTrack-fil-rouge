import { Outlet } from "react-router-dom";
import Sidebar from "../Components/DachAdmin/Sidebar";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="ml-64 w-full p-8">
        <Outlet />
      </main>
    </div>
  );
}
