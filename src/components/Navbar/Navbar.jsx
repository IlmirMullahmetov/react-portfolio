import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../BtnDarkMode/BtnDarkMode';
import './Navbar.css'



export default function Navbar() {
    const activeLink = "nav-list__link nav-list__link--active";
    const NormalLink = "nav-list__link";


    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>
                    <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>
                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : NormalLink}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : NormalLink}>Projects</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : NormalLink}>Contacts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}