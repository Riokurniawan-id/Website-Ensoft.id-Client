import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=" flex flex-col md:container duration-300 h-screen max-h-screen overflow-hidden font-poppins">
      <header className="border-b-2 font-poppins duration-300 flex-none top-0 z-50 h-14 overflow-hidden">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </header>
      <div className="flex duration-300 grow z-10 relative h-full">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div
          className={`absolute w-full bg-slate-600 opacity-70 duration-300 md:hidden cursor-pointer z-10 h-full  ${
            isSidebarOpen ? "" : "hidden"
          }`}
          onClick={toggleSidebar}
        ></div>
        <section className="flex-grow z-0 max-w-full overflow-x-hidden max-h-full overflow-y-auto relative">
          {children}
        </section>
      </div>
    </div>
  );
}

export default Layout;
