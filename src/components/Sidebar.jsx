import {
  ArrowDown,
  BarChart,
  BookOpen,
  Cpu,
  DollarSign,
  Pocket,
} from "react-feather";
import { Link } from "react-router-dom";

function Sidebar({ isSidebarOpen }) {
  return (
    <div
      className={`duration-300 absolute md:static w-60 z-40 bg-white flex-none h-full max-h-screen overflow-y-auto border-r-2 ${
        isSidebarOpen ? "left-0 z-40" : "-left-full"
      }`}
    >
      <ul className="text-slate-600">
        {/* Berita */}
        <Link to="/">
          <li className="sidebar-item">
            <BookOpen size={20} color="#475569" />
            Berita
          </li>
        </Link>
        {/* Trending */}
        <Link to="/trending">
          <li className="sidebar-item">
            <BarChart size={20} color="#475569" />
            Trending
          </li>
        </Link>
        {/* Donasi */}
        <Link to="/donasi-ke-kami">
          <li className="sidebar-item relative flex gap-0">
            <Pocket size={20} color="#475569" />
            Donasi Ke Kami
            <span className="relative items-start h-full justify-self-start">
              <span className="animate-ping h-4 w-4 rounded-full bg-red-700 opacity-75 absolute"></span>
              <span className="h-4 w-4 rounded-full bg-red-600 opacity-75 absolute"></span>
            </span>
          </li>
        </Link>
      </ul>
      {/* tentang kami */}
      <Link to="/tentang-kami">
        <a className="text-slate-700 text-lg self-center hover:bg-slate-200 p-2 w-full flex border-y-2 font-semibold cursor-pointer">
          Tentang Kami
        </a>
      </Link>
      <h3 className="text-slate-700 text-lg self-center p-2 w-full flex font-semibold justify-between">
        Kategori
        <ArrowDown />
      </h3>
      <ul className="text-slate-600">
        {/* kategori teknologi */}
        <Link to="/kategori/teknologi">
          <li className="kategori-item">
            <Cpu />
            Teknologi
          </li>
        </Link>
        {/* kategori ekonomi */}
        <Link to="/kategori/ekonomi">
          <li className="kategori-item">
            <DollarSign />
            Finance
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
