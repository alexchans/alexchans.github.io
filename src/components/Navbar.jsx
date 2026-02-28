import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand">
          Dongyang Chen
        </NavLink>
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/publications" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Publications
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
