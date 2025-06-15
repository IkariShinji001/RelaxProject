import { Outlet } from "react-router-dom";
import Sidebar from "@/pages/home/components/Sidebar"; // nếu có

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: 20, flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
