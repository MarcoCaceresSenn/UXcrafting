import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.component.css';
import CustomNavbarBrand from './custom.navbar-brand.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBarComponent() {
    return (
        <>
            <Navbar className='navbar bg-bcp' expand="lg" variant="dark">
                <Container>
                    <CustomNavbarBrand />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto align-items-center gap-5">
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Operaciones</Nav.Link>
                            <Nav.Link className="custom-feature rounded" href="/">Mis Finanzas</Nav.Link>
                            <Nav.Link href="#">Explora</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarComponent;
