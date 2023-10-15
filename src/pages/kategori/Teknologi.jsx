import Layout from "../../layout/Layout";
import Content from "../../components/ContentBerita";
import { useState, useEffect } from "react";
import api from "../api/api";

const Teknologi = () => {
  const [contents, setContents] = useState([]);

  const fetchContent = async () => {
    const response = await api.get("/content/teknologi");
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

export default Teknologi;
