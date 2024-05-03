import Alumnos from "./components/Alumnos";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import Docentes from "./components/Docentes";
import Materias from "./components/Materias";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path="/" element={<Alumnos/>}/>
          <Route path="/docentes" element={<Docentes/>}/>
          <Route path="/materias" element={<Materias/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
