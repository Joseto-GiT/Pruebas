import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin";

const AdminProductoEditar = ({ productos, updateProducto }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productos.find((p) => p.id === parseInt(id));
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre);
      setPrecio(producto.precio);
    }
  }, [producto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProducto && updateProducto(producto.id, { nombre, precio: parseFloat(precio) });
    navigate("/admin_panel/productos");
  };

  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
        <h5>Editar Producto</h5>
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
              <label className="active" htmlFor="nombre">Nombre del producto</label>
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
              <label className="active" htmlFor="precio">Precio</label>
            </div>
          </div>
          <button type="submit" className="btn green">Guardar</button>
          <button type="button" className="btn grey ml-2" onClick={() => navigate("/admin_panel/productos")}>Cancelar</button>
        </form>
      </main>
    </>
  );
};

export default AdminProductoEditar;
