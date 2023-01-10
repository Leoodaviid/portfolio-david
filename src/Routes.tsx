import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Contato from "./pages/Contato/Contato";
import Habilidades from "./pages/Habillidades/Habilidades";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Sucesso from "./pages/Sucesso/Sucesso";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
