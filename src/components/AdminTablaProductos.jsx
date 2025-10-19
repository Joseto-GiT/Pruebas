import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TablaProductos = ({ productos, onEdit, onDelete, addLink }) => {
  useEffect(() => {
    const tooltips = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(tooltips);
  }, []);

  return (
    <div>
      {addLink && (
        <div className="mb-3" style={{ textAlign: "right" }}>
          <Link
            to={addLink}
            className="btn-floating btn-large green tooltipped"
            data-tooltip="Agregar producto"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      )}

      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>
                <button
                  className="btn-small blue"
                  onClick={() => onEdit(producto.id)}
                >
                  <i className="material-icons">edit</i>
                </button>
                <button
                  className="btn-small red"
                  onClick={() => onDelete(producto.id)}
                >
                  <i className="material-icons">delete</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
