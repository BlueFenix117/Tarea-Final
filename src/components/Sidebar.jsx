import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar mb-md-0 me-md-auto p-3 text-white'>
        <h3 className='mb-5'>B MORE</h3>
        <hr/>
        <ul className='nav nav-pills flex-column mb-auto'>
                    <NavLink 
                    to='/'
                    className={({isActive}) => (`link ${isActive ? 'active' : ''}`)}
                    >
                        Alumnos
                    </NavLink>
                    <NavLink 
                    to='/docentes'
                    className={({isActive}) => (`link ${isActive ? 'active': ''}`)}
                    >
                        Docentes
                    </NavLink>
                    <NavLink 
                    to='/materias'
                    className={({isActive}) => (`link ${isActive ? 'active': ''}`)}
                    >
                        Materias
                    </NavLink>
      
    </ul>
        </div>
  )
}

export default Sidebar