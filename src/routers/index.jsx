import { BrowserRouter, Routes, Route } from "react-router-dom";
import clientRouters from "./clientRouters";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {clientRouters.map((data, index) => {
          return <Route element={data.Element} path={data.path} key={index} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
