// src/components/navbar.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './imagenes/logo2.png';

function BarraMenu({ onNavigate }) {
  return (
    <>
      <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg" 
        fixed="top"
        className="border-bottom border-primary"
      >
        <Container>

          {/* Marca / Logo */}
          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => onNavigate && onNavigate("landing")}
          >
            <img
              src={logo}
              alt="HelioAndes"
              width="40"
              className="me-2"
            />
            <i className="fa-solid fa-bolt me-2"></i>
            HELIOANDES
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbarNav" />
          
          <Navbar.Collapse id="navbarNav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#soluciones">Soluciones</Nav.Link>
              <Nav.Link href="#demo-calculadora">Demo</Nav.Link>
              <Nav.Link href="#planes">Planes</Nav.Link>
              <Nav.Link href="#testimonios">Testimonios</Nav.Link>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>

            {/* Botón para ir al Dashboard */}
            <Button
              variant="warning"
              onClick={() => onNavigate && onNavigate("dashboard")}
            >
              <i class="fa-solid fa-table-columns"></i>
              Ir al Dashboard
            </Button>

             {/* Botón para ir al al Home */}
            <Button
              variant="secondary"
              className="ms-2"
              onClick={() => onNavigate("home")}
            >
             <i class="fa-solid fa-house"></i> 
             Volver al Home
            </Button>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default BarraMenu;
