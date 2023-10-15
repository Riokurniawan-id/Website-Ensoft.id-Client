import Layout from "../../layout/Layout";
import Content from "../../components/ContentBerita";
import api from "../api/api";
import { useState, useEffect } from "react";

const Ekonomi = () => {
  const [contents, setContents] = useState([]);

  const fetchContent = async () => {
    const response = await api.get("/content/ekonomi");
    const data = await response.data.payload;
    setContents(data);
  };

  useEffect(() => {
    fetchContent();
  }, []);
  return (
    <>
      <Layout>
        <Content contents={contents} />
      </Layout>
    </>
  );
};

export default Ekonomi;
