import { useState} from 'react';
import logo from '../../assets/img/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  
  return (
    <div className="navbar">
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>
      <ul className={menuOpen ? 'active' : ''}>
        <li className="btn">
          <button>
            <a href="/support">Поддержать проект</a>
          </button>
        </li>
        <li><a href="/articles">Статьи</a></li>
        <li className="lg"><a href="/"><img src={logo} alt="logo" loading="lazy" /></a></li>
        <li><a href="/course">Курс</a></li>
        <li><a href="/#contact">Связаться с нами</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
