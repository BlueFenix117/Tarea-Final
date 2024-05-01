import React from 'react'
// import { Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
        <nav className='main-navbar'>
            <ul className='d-flex justify-content-end px-5 py-3'>
                {/* <li className='nav-item'>
                    <Link className='link' to='/'>Dashboard</Link>
                </li>
                <li className='nav-item'>
                    <Link className='link' to='/admin'>Admin</Link>
                </li>
                <li className='nav-item'>
                    <Link className='link' to='/profile'>Profile</Link>
                </li> */}
                <li className='nav-item'>
                    <NavLink 
                    to='/'
                    className={({isActive}) => (`link ${isActive ? 'active' : ''}`)}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                    to='/admin'
                    className={({isActive}) => (`link ${isActive ? 'active': ''}`)}
                    >
                        Admin
                    </NavLink>
                    <NavLink 
                    to='/profile'
                    className={({isActive}) => (`link ${isActive ? 'active': ''}`)}
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
  )
}

export default Menu