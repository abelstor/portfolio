import { NavLink, Link } from 'react-router-dom';
import { Menu } from './Menu';

import IconLogo from '../assets/images/logo.png';

export const Header = () => {

    // className={({ isActive }) => (isActive ? "isActive" : null)}

    return (
        <header className="header__container">
            <div className="header__brand">
                <Link to="/">
                    <img className="header__brand-logo" src={IconLogo} alt="logo" />
                </Link>
                <NavLink
                    to="/"
                    className="header__brand-text"
                >
                    abelstor
                </NavLink>
            </div>
            <nav id="nav" className="header__nav">
                <div className="header__nav-links">
                    <NavLink
                        to="/"
                        className="link__item"
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className="link__item"
                    >
                        Portafolio
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="link__item"
                    >
                        Sobre mí
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="link__item"
                    >
                        Contacto
                    </NavLink>
                </div>
            </nav>
            <Menu />
        </header>
    )
}