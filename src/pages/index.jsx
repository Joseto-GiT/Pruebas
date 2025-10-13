import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CardContent from "../components/CardContent";
import ImagenTienda from "../assets/img"

const Index = () => {
  useEffect(() => {
    // Inicializar sidenav de Materialize
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }, []);

  return (
    <>
    <Navbar />
      <section className="section container my-5 mx-3">
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div className="col s12 m6 left-align">
            <p>
              Nuestra empresa se dedica a la compra y venta de productos en línea
              a través de sus redes,
            </p>
            <p>
              nos preocupa en gran medida el ofrecerle a nuestros clientes productos
              de alta calidad.
            </p>
            <p>
              Llevamos más de 5 años en el mercado y contamos con una confianza del
              consumidor que
            </p>
            <p>
              nos ha permitido consolidarnos como una gran opción para los clientes.
            </p>
          </div>

          <div className="col s12 m5">
            <CardContent
              image={}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
