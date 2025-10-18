import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"
import Navbar from "./Navbar";

const MostrarCarrito = () => {
  return (
    <>
      <Navbar />
      <div className="card">
      <div className="card-content">
        <span className="card-title">Tus Productos</span>
        <div className="empty-cart center-align">
          <i className="material-icons">remove_shopping_cart</i>
          <h5>Tu carrito está vacío</h5>
          <p>Agrega algunos productos desde nuestra tienda</p>
          <a href="productos.html" className="btn blue darken-3 waves-effect waves-light">
            Ir a Productos
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default MostrarCarrito;