// src/components/adminlte/DashboardHelioAndes.js
import React, { useState } from "react";
import NavBarPrincipal from "./NavBarPrincipal";
import SideMenu from "./SideMenu";
import DescripcionFooter from "../footer";

// Datos de ejemplo (puedes ajustarlos según tu texto real)
const SERVICIOS = [
  {
    id: "estudio",
    nombre: "Estudio energético",
    tipo: "Diagnóstico previo",
    nivel: "Obligatorio antes de instalar",
    resumen:
      "Analizamos consumo, tipo de techo y radiación para definir el tamaño del sistema.",
    incluye: [
      "Revisión de boletas eléctricas de los últimos 6–12 meses",
      "Evaluación de orientación e inclinación del techo",
      "Estimación de producción y ahorro esperado"
    ]
  },
  {
    id: "instalacion",
    nombre: "Instalación certificada SEC",
    tipo: "Proyecto eléctrico",
    nivel: "Ejecución en terreno",
    resumen:
      "Equipo instalador autorizado y proyectos declarados ante la SEC.",
    incluye: [
      "Ingeniería básica del proyecto",
      "Instalación y cableado según normativa chilena",
      "Declaración SEC y entrega de documentación"
    ]
  },
  {
    id: "monitoreo",
    nombre: "Monitoreo en línea",
    tipo: "Servicio postventa",
    nivel: "Opcional según plan",
    resumen:
      "Plataforma para ver producción, ahorro e incidencias en tiempo real.",
    incluye: [
      "Acceso web/app para visualizar generación",
      "Alertas básicas ante caídas de producción",
      "Reportes simples de energía generada"
    ]
  },
  {
    id: "mantencion",
    nombre: "Mantención preventiva",
    tipo: "Servicio postventa",
    nivel: "Recomendado anual",
    resumen:
      "Revisión periódica del sistema para mantener la eficiencia de los paneles.",
    incluye: [
      "Limpieza de paneles",
      "Revisión de estructuras y fijaciones",
      "Revisión de protecciones y cableado"
    ]
  }
];

const PLANES = [
  {
    id: "basico",
    nombre: "Plan Básico",
    potencia: "3–5 kW",
    perfilCliente: "Casa pequeña o pyme con consumo moderado.",
    incluye: [
      "Estudio energético",
      "Instalación estándar",
      "Monitoreo básico"
    ],
    recomendacion:
      "Buen punto de partida para reducir la cuenta de luz sin una inversión tan alta."
  },
  {
    id: "optimizado",
    nombre: "Plan Optimizado",
    potencia: "5–8 kW",
    perfilCliente: "Casa o negocio con mayor consumo (electrodomésticos, aire acondicionado, etc.).",
    incluye: [
      "Estudio energético detallado",
      "Instalación certificada SEC",
      "Monitoreo en línea completo",
      "1 visita de mantención al año"
    ],
    recomendacion:
      "Equilibrio entre inversión y ahorro. Ideal para hogares que pasan gran parte del día en la casa."
  },
  {
    id: "autonomo",
    nombre: "Plan Autónomo",
    potencia: "8–12 kW + baterías",
    perfilCliente: "Pymes o viviendas que buscan alta independencia de la red.",
    incluye: [
      "Estudio energético avanzado",
      "Instalación con banco de baterías",
      "Monitoreo avanzado",
      "Plan de mantención anual"
    ],
    recomendacion:
      "Recomendado cuando se requiere respaldo ante cortes o se quiere maximizar el autoconsumo."
  }
];

function DashboardHelioAndes({ onNavigate }) {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(SERVICIOS[0]);
  const [planSeleccionado, setPlanSeleccionado] = useState(PLANES[0]);

  return (
    <>
    <div className="wrapper" id="dashboard-helioandes">
      <NavBarPrincipal onNavigate={onNavigate}/>
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
                  <li className="breadcrumb-item">
                    
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de contenido */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* Columna Servicios */}
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
                        {SERVICIOS.map((servicio) => (
                          <tr
                            key={servicio.id}
                            onClick={() => setServicioSeleccionado(servicio)}
                            style={{ cursor: "pointer" }}
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Detalle de servicio */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Detalle del servicio</h3>
                  </div>
                  <div className="card-body">
                    {servicioSeleccionado ? (
                      <>
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
                          {servicioSeleccionado.incluye.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p>Selecciona un servicio en la tabla de arriba.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Columna Planes */}
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
                        {PLANES.map((plan) => (
                          <tr
                            key={plan.id}
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
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Detalle de plan */}
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
                          {planSeleccionado.incluye.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <p className="mt-3">
                          <strong>Recomendación comercial:</strong>{" "}
                          {planSeleccionado.recomendacion}
                        </p>
                      </>
                    ) : (
                      <p>Selecciona un plan en la tabla de arriba.</p>
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
    <div id="footer">
      <DescripcionFooter />
    </div>
  </>
  );
}

export default DashboardHelioAndes;
