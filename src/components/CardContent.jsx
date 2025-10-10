import React from "react";
import imagenTienda from "../assets/img/imagen-tienda.png";
import "../assets/css/CardContent.css";

const CardContent = () => {
  return (
    <div className="col s12 m4 card-right">
      <div className="card">
        <div className="card-image">
          <img src={imagenTienda} alt="Imagen de una tienda" />
        </div>
        <div className="card-content">
          <p>
            Comienza a vender con nosotros utilizando nuestra plataforma.
          </p>
        </div>
        <div className="card-action">
          <a href="https://github.com/AbelolDev">Link a mi Github</a>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
