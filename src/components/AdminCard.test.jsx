import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AdminCard from "../components/AdminCard";

describe("AdminCard Component", () => {
  it("should render props correctly", () => {
    const props = {
      icon: "settings",
      iconColor: "blue-text",
      title: "Panel",
      description: "Accede a la configuración del sistema",
      buttonColor: "blue",
      linkTo: "/admin/panel",
    };

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <AdminCard {...props} />
      </MemoryRouter>
    );

    // Verifica el título
    expect(getByText("Panel")).toBeTruthy();

    // Verifica la descripción
    expect(getByText("Accede a la configuración del sistema")).toBeTruthy();

    // Verifica el texto del botón
    expect(getByText("Ir a panel")).toBeTruthy();

    // Verifica el link
    const link = getByRole("link", { name: "Ir a panel" });
    expect(link.getAttribute("href")).toBe("/admin/panel");
  });
});

