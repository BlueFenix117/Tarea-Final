import React, { useState, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'

const Materias = (props) => {

  const {data, isLoading, error} = useFetch('https://backcolegiosebas.azurewebsites.net/Colegio/api/Materias');

  const tableRef = useRef(null);

  return (
    <div className='container'>
    {error && <h2 className='text-center'>Error:{error}</h2>}
    {isLoading ? (<h2 className='text-center'>Loading...</h2>):(

       <table className='table table-striped mx-5' ref={tableRef}>
         <thead>
           <tr>
             <th>ID Materia</th>
             <th>Nombre</th>
             <th>ID Docente</th>
           </tr>
         </thead>
         <tbody>
           {data?.map((materia) => (
             <tr key={materia.idMateria}>
               <th>{materia.idMateria}</th>
               <th>{materia.nombre}</th>
               <th>{materia.idDocente}</th>
             </tr>
           ))}
         </tbody>
       </table>
       )}
    </div>
  )
}

export default Materias