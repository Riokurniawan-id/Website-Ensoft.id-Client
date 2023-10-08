import React from "react";
import { AlignJustify, User, Search } from "react-feather";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className=" w-screen md:container flex flex-wrap justify-between px-4 bg-white">
      <div className="flex flex-wrap self-center gap-3">
        <button id="hamburger" className="md:hidden" onClick={toggleSidebar}>
          <AlignJustify size={25} color="#334155" />
        </button>
        <p className="font-semibold font-poppins text-xl">ENSOFT ID</p>
      </div>
      <div className="flex flex-wrap gap-3 m-4">
        <button id="profile">
          <User size={25} color="#475569" />
        </button>
        <button id="search">
          <Search size={25} color="#475569" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
