import React from "react";
import Navbar from "../components/Navbar";
import CardContent from "../components/CardContent"

const Index = () => {
  return (
    <>
      <Navbar />
      <section className="section my-5 mx-3">
        <div className="row">
          <div className="col s12 m6">
            <p>
              Nuestra empresa se dedica a la compra y venta de productos en
              línea a través de sus redes,
            </p>
            <p>
              nos preocupa en gran medida el ofrecerle a nuestros clientes
              productos de alta calidad.
            </p>
            <p>
              Llevamos más de 5 años en el mercado y contamos con una confianza
              del consumidor que
            </p>
            <p>
              nos ha permitido consolidarnos como una gran opción para los
              clientes.
            </p>
          </div>
          <CardContent />
        </div>
      </section>
    </>
  );
};

export default Index;
