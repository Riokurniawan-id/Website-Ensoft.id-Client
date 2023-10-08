import Layout from "../layout/Layout";
import { useState, useEffect } from "react";
import api from "./api/api";
import ContentBerita from "../components/ContentBerita";

const Berita = () => {
  const [contents, setContents] = useState([]);

  const fetchContent = async () => {
    const response = await api.get("/content");
    const data = await response.data.payload;
    setContents(data);
  };

  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <>
      <Layout>
        <ContentBerita contents={contents} />
      </Layout>
    </>
  );
};
export default Berita;
