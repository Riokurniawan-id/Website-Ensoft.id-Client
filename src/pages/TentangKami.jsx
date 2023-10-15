import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const TentangKeKami = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="text-slate-800 text-3xl py-4 w-full border-b-2 font-semibold">
            Tentang Kami
          </h1>
        </div>
        <div className="container pb-44">
          <h2 className="text-slate-700 text-2xl pt-4 pb-1 w-full font-semibold">
            Introduction
          </h2>
          <p className="text-slate-600 text-md  w-full font-medium">
            <span className="font-semibold">Ensoft ID</span> adalah tempat di
            mana berita dan informasi bertemu dengan kemudahan seperti yang Anda
            temui di media sosial. Kami berkomitmen untuk memberikan konten yang
            informatif, menarik, dan mudah dijangkau kepada pembaca kami. <br />
            <br />
            <span className="font-semibold">
              Apa yang membuat Ensoft ID berbeda adalah kesederhanaan.
              <br />
            </span>
            Kami menghadirkan berita dengan cara yang memudahkan Anda untuk
            menemukan informasi yang Anda butuhkan. Dalam kebisingan dunia
            berita saat ini, kami menawarkan cahaya terang dalam bentuk berita
            yang singkat dan jelas.
            <br />
            <br /> kami percaya bahwa akses ke informasi adalah hak dasar. Kami
            berkomitmen untuk terus berinovasi dan memperluas cakupan kami agar
            Anda tetap terhubung dengan dunia di sekitar Anda.
            <br />
            <br /> Terima kasih telah menjadi bagian dari perjalanan kami. Kami
            sangat menghargai dukungan Anda saat kami terus tumbuh. Untuk
            informasi lebih lanjut tentang cara Anda dapat membantu kami,
            kunjungi halaman
            <Link to="/donasi-ke-kami">
              <span className="font-semibold text-blue-500"> Donasi kami.</span>
            </Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export default TentangKeKami;
