import React, { useState, useRef } from 'react'
import { useFetch } from '../hooks/useFetch'

const Docentes = () => {

  const {data, isLoading, error} = useFetch('https://backcolegiosebas.azurewebsites.net/Colegio/api/Docentes');

  const tableRef = useRef(null);

  return (
    <div className='container'>
    {error && <h2 className='text-center'>Error:{error}</h2>}
    {isLoading ? (<h2 className='text-center'>Loading...</h2>):(

       <table className='table table-striped' ref={tableRef}>
         <thead>
           <tr>
             <th>Nombre</th>
             <th>Apellido</th>
           </tr>
         </thead>
         <tbody>
           {data?.map((docente) => (
             <tr key={docente.nombre}>
               <th>{docente.nombre}</th>
               <th>{docente.apellido}</th>
             </tr>
           ))}
         </tbody>
       </table>
       )}
    </div>
  )
}

export default Docentes