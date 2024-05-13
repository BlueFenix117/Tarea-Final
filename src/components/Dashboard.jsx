import React from 'react'
import Sidebar from './Sidebar'
import { HashRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Docentes from "./Docentes";
import Materias from "./Materias";
import NotFound from "./NotFound";
import Alumnos from "./Alumnos";
import ISLogin from "./ISLogin";

const Dashboard = (props) => {
  return (
    <>
       <HashRouter>
         <Sidebar/>
         <Routes>
         <Route path="/login" element={<ISLogin/>}/>
          <Route path="/" element={<Alumnos/>}/>
          <Route path="/docentes" element={<Docentes/>}/>
          <Route path="/materias" element={<Materias/>}/>
          <Route path="*" element={<NotFound/>}/>
         </Routes>
       </HashRouter>
     </>
  )
}

export default Dashboard