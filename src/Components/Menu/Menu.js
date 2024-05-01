import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.scss'

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='color-blue'>Tareas</Nav.Link>
            <Nav.Link href="#link" className='color-blue'>Metas</Nav.Link>
            <NavDropdown title="Calendario" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Largo Plazo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mediano Plazo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Corto Plazo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Historial
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;