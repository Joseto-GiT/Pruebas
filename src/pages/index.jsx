import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ImagenTienda from "../assets/img/imagen-tienda.png";

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

          <div className="col s12 m5">
            <div className="row">
              <div className="col s6">
                <ProductCard
                  image="https://images.unsplash.com/photo-1755782413312-9976618577a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
                  title="Vestido mujer blanco"
                  description="Estilo moderno y resistente al agua. Perfecta para la temporada otoño-invierno."
                  buttonText="Comprar ahora"
                  buttonLink="https://tu-tienda.com/chaqueta-urbana" /*Tenemos que añadir el boton al carrito */
                />
              </div>
              <div className="col s6">
                <ProductCard
                  image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                  title="Polera blanca hombre"
                  description="Ligero, cómodo y elegante. Ideal para días soleados y eventos casuales."
                  buttonText="Ver detalles"
                  buttonLink="https://tu-tienda.com/vestido-floral" /*Tenemos que añadir el boton al carrito */
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
