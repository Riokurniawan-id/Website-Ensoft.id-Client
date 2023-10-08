import { FileText } from "react-feather";

const Content = ({ contents }) => {
  return (
    <>
      {contents.map((contents, index) => {
        return (
          <div className="h-full border-b-2">
            <div key={index} className="p-3 md:p-12 relative h-full ">
              <img
                src={contents.link_gambar}
                alt={contents.judul}
                className="w-full h-2/6 rounded-lg
             md:h-2/5 object-cover"
              />
              <h1 className="font-semibold mt-4 text-lg">{contents.judul}</h1>
              <ul className="flex text-sm gap-5 pl-3 pt-2">
                <li className="bg-slate-600 px-3 rounded-full text-white">
                  {contents.kategori}
                </li>

                <a
                  href={contents.link_sumber}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <li className="flex items-center gap-1 font-semibold text-slate-500">
                    <FileText size={15} />
                    {contents.sumber}
                  </li>
                </a>
              </ul>

              <p className="mt-6 whitespace-pre-line">{contents.isi_singkat}</p>
            </div>
            <div className=""></div>
          </div>
        );
      })}
    </>
  );
};

export default Content;
