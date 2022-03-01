import { NavLink } from 'react-router-dom'

import NavStyle from './style/NavStyleComponent'


function NavComponent() {
    return (
        <NavStyle>
            <ul>
                <li>
                    <NavLink to="/" end>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/lists">Listas</NavLink>
                </li>
            </ul>
        </NavStyle>
    )
}

export default NavComponent