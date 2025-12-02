import React, { useState } from "react";
import "./App.css";

import Hero from "./components/hero";
import CalculoRemuneracion from "./components/calculo";
import Navbar from "./components/navbar";
import Contacto from "./components/contacto";
import Servicios from "./components/servicios";
import Soluciones from "./components/soluciones";
import DescripcionPlanes from "./components/planes";
import DescripcionTestimonio from "./components/testimonios";
import DescripcionFooter from "./components/footer";
import FAQ from "./components/FAQ";

import DashboardHelioAndes from "./components/adminlte/DashboardHelioAndes";
import HomeSelector from "./components/HomeSelector";


function App() {
  const [view, setView] = useState("home"); // 'home' = pantalla inicial

  // 1) Pantalla inicial con logo + botones
  if (view === "home") {
    return <HomeSelector onNavigate={setView} />;
  }

  // 2) Vista Dashboard AdminLTE
  if (view === "dashboard") {
    return <DashboardHelioAndes onNavigate={setView} />; // sirve para CAMBIAR la vista actual de la aplicación.
  }

  // 3) Vista Landing principal
  return (
    <div className="App">
      <div className="container">
        {/* agregamos un ID en cada sección para el uso del navbar */}
        <div id="inicio">
          <Navbar onNavigate={setView}/>
        </div>

        <div id="hero">
          <Hero />
        </div>

        <div id="servicios">
          <Servicios />
        </div>

        <div id="soluciones">
          <Soluciones />
        </div>

        <div id="demo-calculadora">
          <CalculoRemuneracion />
        </div>

        <div id="planes">
          <DescripcionPlanes />
        </div>

        <div id="testimonios">
          <DescripcionTestimonio />
        </div>

        <div id="FAQ">
          <FAQ />
        </div>
      </div>

      {/* dejamos esta sección fuera del container */}
      <div id="contacto">
        <Contacto />
      </div>

      <div id="footer">
        <DescripcionFooter />
      </div>
    </div>
  );
}

export default App;
