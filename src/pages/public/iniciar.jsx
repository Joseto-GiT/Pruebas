import React, { useEffect } from "react";
import { initLoginForm } from "../../assets/js/validar_login";
import Navbar from "../../components/Navbar";

const Iniciar = () => {
  useEffect(() => {
    initLoginForm();
  }, []);

  return (
    <>
      <Navbar />
      <section className="section container my-5">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Iniciar sesión</span>
                <form id="loginForm">
                  <div className="input-field">
                    <input type="email" id="correo" name="correo" required />
                    <label htmlFor="correo">Email</label>
                  </div>

                  <div className="input-field">
                    <input
                      type="password"
                      id="passwd"
                      name="password"
                      required
                    />
                    <label htmlFor="passwd">Contraseña</label>
                    <span
                      className="helper-text"
                      data-error="La contraseña debe tener mínimo 8 caracteres"
                      data-success="Contraseña válida"
                    ></span>
                  </div>

                  <button type="submit" className="btn blue darken-3">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Iniciar;
