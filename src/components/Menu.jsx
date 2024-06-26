import React from 'react'
// import { Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
        <nav className='main-navbar'>
            <ul className='d-flex justify-content-end px-5 py-3'>
                <li className='nav-item'>
                <NavLink 
                    to='/login'
                    className={({isActive}) => (`link ${isActive ? 'active' : ''}`)}
                    >
                        Login
                    </NavLink>
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
                </li>
            </ul>
        </nav>
  )
}

export default Menu