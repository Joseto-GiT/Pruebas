import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminProductoNuevo = ({ addProducto }) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !precio) return alert("Completa todos los campos");

    const nuevoProducto = { id: Date.now(), nombre, precio: parseFloat(precio) };
    addProducto && addProducto(nuevoProducto);
    navigate("/admin_panel/productos");
  };

  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
        <h5>Nuevo Producto</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m6">
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <label htmlFor="nombre">Nombre del producto</label>
            </div>
            <div className="input-field col s12 m6">
              <input
                id="precio"
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                min="0"
              />
              <label htmlFor="precio">Precio</label>
            </div>
          </div>
          <button type="submit" className="btn green">Guardar</button>
          <button type="button" className="btn grey ml-2" onClick={() => navigate("/admin_panel/productos")}>Cancelar</button>
        </form>
      </main>
    </>
  );
};

export default AdminProductoNuevo;
