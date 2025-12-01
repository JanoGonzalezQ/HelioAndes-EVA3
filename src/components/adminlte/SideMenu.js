// src/components/adminlte/SideMenu.js
import React from "react";

function SideMenu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <a href="#dashboard-helioandes" className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="HelioAndes Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">HelioAndes Admin</span>
      </a>

      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="dist/img/avatar.png"
              className="img-circle elevation-2"
              alt="User"
            />
          </div>
          <div className="info">
            <a href="#dashboard-helioandes" className="d-block">
              Usuario demo
            </a>
          </div>
        </div>

        {/* Menú principal */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="#dashboard-helioandes" className="nav-link active">
                <i className="nav-icon fas fa-solar-panel" />
                <p>Dashboard HelioAndes</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#lista-servicios" className="nav-link">
                <i className="nav-icon fas fa-tools" />
                <p>Servicios</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#lista-planes" className="nav-link">
                <i className="nav-icon fas fa-layer-group" />
                <p>Planes</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default SideMenu;
