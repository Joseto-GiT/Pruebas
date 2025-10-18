import React from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import '../../assets/css/Productos.css';

import producto1 from '../../assets/img/producto.jpg';
import producto2 from '../../assets/img/producto_2.jpg';
import producto3 from '../../assets/img/producto_3.jpg';

export default function Productos() {
  const productos = [
    { id: 1, title: 'producto 1', description: 'producto 1', image: producto1, buttonText: 'Comprar', buttonLink: '#!' },
    { id: 2, title: 'producto 2', description: 'producto 2', image: producto2, buttonText: 'Comprar', buttonLink: '#!' },
    { id: 3, title: 'producto 3', description: 'producto 3', image: producto3, buttonText: 'Comprar', buttonLink: '#!' },
  ];

  return (
    <>
      <Navbar />
      <section className="productos-container">
        {productos.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </section>
    </>
  );
}
