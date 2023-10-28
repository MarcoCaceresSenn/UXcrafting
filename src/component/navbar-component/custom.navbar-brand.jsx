import Logo from '../../assets/images/logo-blanco.svg'

import Navbar from 'react-bootstrap/Navbar';
export default function CustomNavbarBrand() {
    return (
        <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
                src={Logo}
                alt="Logo blanco BCP"
                width="100"
                className="d-inline-block align-top"
            />
        </Navbar.Brand>
    );
}