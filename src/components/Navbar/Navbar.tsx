import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logoLeaf from '../../assets/icons/logo-leaf.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__content">
        <div className="navbar__brand">
          <img src={logoLeaf} alt="Logo La Hojarasca" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__title">La Hojarasca</span>
            <span className="navbar__subtitle">Ciencia y Física para Colombia</span>
          </div>
        </div>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Abrir menú de navegación"
          onClick={handleToggle}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <NavLink
            to="/"
            onClick={handleClose}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            onClick={handleClose}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/blog"
            onClick={handleClose}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/ensenanza"
            onClick={handleClose}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Enseñanza
          </NavLink>
          <NavLink
            to="/estudiar"
            onClick={handleClose}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Estudiar
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;