import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/LogoNavbar.css"
import Logo from "../assets/img/logo.png"

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
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/iniciar_sesion">Iniciar sesión</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/carrito">Mi carrito</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/iniciar_sesion">Iniciar sesión</Link></li>
      </ul>
    </>
  );
};

export default Navbar;
