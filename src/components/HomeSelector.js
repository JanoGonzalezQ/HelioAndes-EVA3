import React from "react";
import { Button } from "react-bootstrap";
import logoHelio from "./imagenes/logo2.png";
import DescripcionFooter from "./footer"; //



function HomeSelector({ onNavigate }) {
  return (
    <>
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(to bottom, #a10808, #000000)",
        color: "white",
        padding: "20px"
      }}
    >
          {/* LOGO */}

          <img
              src={logoHelio}
              alt="HelioAndes Logo"
              className="rounded-pill"
              style={{ width: "1000px", maxWidth: "100%", marginBottom: "30px"}}
          />



      <h2 className="mb-1">Bienvenido a HelioAndes</h2>

      {/* BOTONES */}
      <div className="d-grid gap-3" style={{ width: "260px" }}>
        <Button
          variant="warning"
          size="lg"
          onClick={() => onNavigate("dashboard")}
        >
          Ir al Dashboard
        </Button>

        <Button
          variant="light"
          size="lg"
          onClick={() => onNavigate("landing")}
        >
          Ir a la Página Principal
        </Button>
      </div>
    </div>

    <div id="footer">
      <DescripcionFooter />
    </div>
  </>

    
  );
}

export default HomeSelector;
