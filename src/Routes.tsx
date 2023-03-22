import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Success from "./pages/Success/Success";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/sucesso" element={<Success />} />
        </Route>
      </WrapperRoutes>
    </BrowserRouter>
  );
}
