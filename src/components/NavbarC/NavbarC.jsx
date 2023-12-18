import './NavbarC.css'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavbarC = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className='align-items-baseline align-items-lg-center'>
                    <div className='d-lg-flex'>
                        <Navbar.Brand href="#home">Sunglasses</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>

                                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Sol</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Moda</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Deportivos</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div><CartWidget />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarC
