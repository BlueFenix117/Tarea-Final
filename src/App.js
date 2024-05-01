import Dashboard from "./components/Dashboard";
import { HashRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Menu/>

        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
