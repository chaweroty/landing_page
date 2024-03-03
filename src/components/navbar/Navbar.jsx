import React, { useState } from 'react';
import './Navbar.scss';
import Wrapper from '../wrapper/Wrapper';
import Logo from '../../assets/logolasante.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <Wrapper className="navbar_container">
        <a href="#" className="navbar_logo">
          <img src={Logo} alt="La Santé" />
        </a>
        <ul className="navbar_links">
          <li>
            <a href="#">Somos</a>
          </li>
          <li>
            <a href="#">Medicamentos Bioequivalentes</a>
          </li>
          <li>
            <a href="#">Farmacovigilancia</a>
          </li>
          <li className="dropdown-container">
            <a href="#" onClick={toggleDropdown}>
              Bog La Santé
            </a>
            {showDropdown && (
              <div className="dropdown-menu">
                <ul>
                  <li>
                    <a href="#">Ver todas las entradas</a>
                  </li>
                  <li>
                    <a href="#">Todo acerca del Glaucoma</a>
                  </li>
                  <li>
                    <a href="#">Salud Visual</a>
                  </li>
                  <li>
                    <a href="#">Alergias</a>
                  </li>
                  <li>
                    <a href="#">Hipertensión arterial</a>
                  </li>
                  <li>
                    <a href="#">Vitamina C</a>
                  </li>
                  <li>
                    <a href="#">Infecciones virales</a>
                  </li>
                  <li>
                    <a href="#">Bacterias</a>
                  </li>
                  <li>
                    <a href="#">Antihistaminicos</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        <div className="navabar_menubar">
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
