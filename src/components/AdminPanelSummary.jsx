import React from "react";
import AdminPanelCard from "./AdminPanelCard";

/**
 * Componente que agrupa las tarjetas del panel de administración.
 * Puedes pasar los datos dinámicamente (por props, fetch, context, etc.)
 */
const AdminPanelSummary = ({ data }) => {
  return (
    <div className="row center-align">
      <AdminPanelCard
        color="teal"
        icon="shopping_cart"
        value={data.productos}
        label="Productos"
      />
      <AdminPanelCard
        color="blue"
        icon="group"
        value={data.usuarios}
        label="Usuarios"
      />
      <AdminPanelCard
        color="orange"
        icon="assessment"
        value={data.reportes}
        label="Reportes"
      />
      <AdminPanelCard
        color="red"
        icon="warning"
        value={data.alertas}
        label="Alertas"
      />
    </div>
  );
};

export default AdminPanelSummary;
