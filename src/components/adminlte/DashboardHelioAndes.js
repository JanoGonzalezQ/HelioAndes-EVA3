// src/components/adminlte/DashboardHelioAndes.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBarPrincipal from "./NavBarPrincipal";
import SideMenu from "./SideMenu";
import DescripcionFooter from "../footer";

// URL base de la API Mockoon
const API_BASE_URL = "http://localhost:3001";

function DashboardHelioAndes({ onNavigate }) {
  // ✅ Listas que vienen desde la API (arrays completos)
  const [servicios, setServicios] = useState([]);
  const [planes, setPlanes] = useState([]);

  // ✅ Elementos seleccionados para mostrar en el detalle
  // Cuando hago clic en una fila, guardo aquí el objeto completo
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [planSeleccionado, setPlanSeleccionado] = useState(null);

  // Estados de apoyo: carga y error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ useEffect: se ejecuta una sola vez al cargar el componente
  // Aquí llamo a la API (Mockoon) para traer servicios y planes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Llamadas a las URI de Mockoon en paralelo
        const [resServicios, resPlanes] = await Promise.all([
          axios.get(`${API_BASE_URL}/servicios`),
          axios.get(`${API_BASE_URL}/planes`)
        ]);

        // Guardo los resultados completos en estado
        setServicios(resServicios.data);
        setPlanes(resPlanes.data);

        // Dejo seleccionado el primer servicio y el primer plan por defecto
        if (resServicios.data.length > 0) {
          setServicioSeleccionado(resServicios.data[0]);
        }
        if (resPlanes.data.length > 0) {
          setPlanSeleccionado(resPlanes.data[0]);
        }
      } catch (err) {
        console.error(err);
        const msg =
          err.response?.data?.message ||
          err.message ||
          "No se pudieron cargar los datos. Revisa la API Mockoon.";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // ← [] significa que se ejecuta solo una vez al montar el componente

  return (
    <>
      <div className="wrapper" id="dashboard-helioandes">
        <NavBarPrincipal onNavigate={onNavigate} />
        <SideMenu />

        {/* Contenido principal */}
        <div className="content-wrapper">
          {/* Header */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Dashboard HelioAndes</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>

              {/* Mensaje mientras trae datos de la API */}
              {loading && (
                <div className="row">
                  <div className="col-12">
                    <p>Cargando datos desde la API...</p>
                  </div>
                </div>
              )}

              {/* Mensaje de error si la API falla */}
              {error && (
                <div className="row">
                  <div className="col-12">
                    <p className="text-danger">{error}</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Sección de contenido */}
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {/* ───────────────────────────────────────
                    COLUMNA SERVICIOS (lista + detalle)
                    ─────────────────────────────────────── */}
                <div className="col-md-6" id="lista-servicios">
                  {/* Listado de servicios */}
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h3 className="card-title">Servicios registrados</h3>
                    </div>
                    <div className="card-body p-0 table-responsive">
                      <table className="table table-hover text-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Servicio</th>
                            <th>Tipo</th>
                            <th>Nivel</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Si no hay datos y no está cargando, muestro mensaje */}
                          {servicios.length === 0 && !loading ? (
                            <tr>
                              <td colSpan="3">No hay servicios cargados.</td>
                            </tr>
                          ) : (
                            servicios.map((servicio) => (
                              <tr
                                key={servicio.id} // React identifica la fila por id
                              
                                // Cuando hago clic en esta fila, guardo ese servicio
                                // en "servicioSeleccionado".
                                onClick={() => setServicioSeleccionado(servicio)}
                                style={{ cursor: "pointer" }}
                                // Si este servicio es el seleccionado, pinto la fila activa
                                className={
                                  servicioSeleccionado?.id === servicio.id
                                    ? "table-active"
                                    : ""
                                }
                              >
                                <td>{servicio.nombre}</td>
                                <td>{servicio.tipo}</td>
                                <td>{servicio.nivel}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Detalle servicio (lee lo que haya en servicioSeleccionado) */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Detalle del servicio</h3>
                    </div>
                    <div className="card-body">
                      {servicioSeleccionado ? (
                        <>
                          {/* Todo esto se alimenta del estado servicioSeleccionado */}
                          <h4>{servicioSeleccionado.nombre}</h4>
                          <p className="text-muted mb-1">
                            <strong>Tipo: </strong>
                            {servicioSeleccionado.tipo}
                          </p>
                          <p className="text-muted mb-3">
                            <strong>Nivel: </strong>
                            {servicioSeleccionado.nivel}
                          </p>
                          <p>{servicioSeleccionado.resumen}</p>
                          <ul>
                            {servicioSeleccionado.incluye &&
                              servicioSeleccionado.incluye.map(
                                (item, index) => (
                                  <li key={index}>{item}</li>
                                )
                              )}
                          </ul>
                        </>
                      ) : (
                        <p>
                          {loading
                            ? "Cargando servicios..."
                            : "Selecciona un servicio en la tabla de arriba."}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* ───────────────────────────────────────
                    COLUMNA PLANES (lista + detalle)
                    ─────────────────────────────────────── */}
                <div className="col-md-6" id="lista-planes">
                  {/* Listado de planes */}
                  <div className="card card-success card-outline">
                    <div className="card-header">
                      <h3 className="card-title">Planes registrados</h3>
                    </div>
                    <div className="card-body p-0 table-responsive">
                      <table className="table table-hover text-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>Plan</th>
                            <th>Potencia</th>
                            <th>Perfil</th>
                          </tr>
                        </thead>
                        <tbody>
                          {planes.length === 0 && !loading ? (
                            <tr>
                              <td colSpan="3">No hay planes cargados.</td>
                            </tr>
                          ) : (
                            planes.map((plan) => (
                              <tr
                                key={plan.id} // id único del plan
                                //  Igual que en servicios:
                                // al hacer clic guardo el plan completo en "planSeleccionado"
                                onClick={() => setPlanSeleccionado(plan)}
                                style={{ cursor: "pointer" }}
                                className={
                                  planSeleccionado?.id === plan.id
                                    ? "table-active"
                                    : ""
                                }
                              >
                                <td>{plan.nombre}</td>
                                <td>{plan.potencia}</td>
                                <td>{plan.perfilCliente}</td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Detalle plan (lee lo que haya en planSeleccionado) */}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Detalle del plan</h3>
                    </div>
                    <div className="card-body">
                      {planSeleccionado ? (
                        <>
                          <h4>{planSeleccionado.nombre}</h4>
                          <p className="text-muted mb-1">
                            <strong>Potencia estimada: </strong>
                            {planSeleccionado.potencia}
                          </p>
                          <p className="text-muted mb-3">
                            <strong>Perfil de cliente: </strong>
                            {planSeleccionado.perfilCliente}
                          </p>
                          <p>
                            <strong>Incluye:</strong>
                          </p>
                          <ul>
                            {planSeleccionado.incluye &&
                              planSeleccionado.incluye.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                          </ul>
                          <p className="mt-3">
                            <strong>Recomendación comercial:</strong>{" "}
                            {planSeleccionado.recomendacion}
                          </p>
                        </>
                      ) : (
                        <p>
                          {loading
                            ? "Cargando planes..."
                            : "Selecciona un plan en la tabla de arriba."}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* /.row */}
            </div>
          </section>
        </div>
      </div>

      {/* Footer reutilizado */}
      <div id="footer">
        <DescripcionFooter />
      </div>
    </>
  );
}

export default DashboardHelioAndes;
