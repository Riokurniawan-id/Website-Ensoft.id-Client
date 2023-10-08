import Berita from "../pages/Berita";
import Trending from "../pages/Trending";
import DonasiKeKami from "../pages/DonasiKeKami";
import TentangKeKami from "../pages/TentangKami";
import Teknologi from "../pages/kategori/Teknologi";
import Ekonomi from "../pages/kategori/Ekonomi";

const clientRouters = [
  {
    Element: <Berita />,
    path: "/",
    key: "Berita",
  },
  {
    Element: <Trending />,
    path: "/trending",
    key: "trending",
  },
  {
    Element: <DonasiKeKami />,
    path: "/donasi-ke-kami",
    key: "Donasi-Ke-Kami",
  },
  {
    Element: <TentangKeKami />,
    path: "/tentang-kami",
    key: "tentang-kami",
  },
  {
    Element: <Teknologi />,
    path: "/kategori/teknologi",
    key: "teknologi",
  },
  {
    Element: <Ekonomi />,
    path: "/kategori/ekonomi",
    key: "ekonomi",
  },
];

export default clientRouters;
