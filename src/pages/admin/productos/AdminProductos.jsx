import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TablaProductos from "../../../components/AdminTablaProductos";

const AdminProductos = ({ productos, deleteProducto }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => navigate(`/admin_panel/productos/editar/${id}`);
  const handleDelete = (id) => {
    if (window.confirm("¿Seguro de eliminar este producto?")) deleteProducto(id);
  };

  return (
    <>
      <NavbarAdmin />
      <main className="container my-5">
        <h5>Lista de productos</h5>
        <TablaProductos
          productos={productos}
          onEdit={handleEdit}
          onDelete={handleDelete}
          addLink="/admin_panel/productos/producto_nuevo"
        />
      </main>
    </>
  );
};

export default AdminProductos;
