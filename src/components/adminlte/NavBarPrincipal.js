import React from "react";

function NavBarPrincipal({ onNavigate }) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">

      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="pushmenu"
            href="#"
            role="button"
          >
            <i className="fas fa-bars" />
          </a>
        </li>

        {/* ← Ir a Página Principal */}
        <li className="nav-item d-none d-sm-inline-block">
          <a
            onClick={() => onNavigate("landing")}
            className="nav-link"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-earth-americas"></i>
            <span>Pagina Principal</span>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a
            href="#"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            style={{ cursor: "pointer" }}
            
          >
           <i class="fa-solid fa-house"></i> 
           <span>Home</span>
          </a>
        </li>

      </ul>

      


      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-none d-sm-inline-block">
          <span className="nav-link">
            HelioAndes · Panel de Servicios y Planes
          </span>
        </li>
      </ul>

    </nav>
  );
}

export default NavBarPrincipal;
