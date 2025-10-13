import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/LogoNavbar.css"
import Logo from "../assets/img/logo.png"
import Carrito from '../pages/Carrito';
import Index from '../pages';

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <nav className='blue darken-3 my-5 yellow'>
        <div className="nav-wrapper">
          <img src={Logo} alt="Imagen de un logo generico" className='logo-navbar'/>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/carrito">Mi carrito</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </>
  );
};

export default Navbar;
