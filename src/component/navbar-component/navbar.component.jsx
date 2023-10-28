import React from 'react';
//import Logo from '../../assets/images/logo-blanco.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.component.css';
import CustomNavbarBrand from './custom.navbar-brand.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBarComponent() {
    return (
        <>
            <Navbar className='navbar bg-bcp' data-bs-theme="dark">
                <Container>
                    <CustomNavbarBrand />

                    <Nav className="ml-auto align-items-center gap-5">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Operaciones</Nav.Link>
                        <Nav.Link className="custom-feature rounded" href="/mis-finanzas">Mis Finanzas</Nav.Link>
                        <Nav.Link href="#">Explora</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarComponent;
