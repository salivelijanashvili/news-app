import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/usa-today">Usa Today</Nav.Link>
                <Nav.Link href="/cnn">CNN</Nav.Link>
                <Nav.Link href="/bbc-news">BBC</Nav.Link>
                <NavDropdown title="OTHER GLOBAL CHANNELS" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Aljazira</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Something</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Something</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Contact Us</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavBar;