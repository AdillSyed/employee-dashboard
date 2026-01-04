import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F6F7FB]">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
