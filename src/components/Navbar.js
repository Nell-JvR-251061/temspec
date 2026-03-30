import '../App.css'
import logo from './temspecLogo.svg';

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

//Router Imports
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <div id='navbar-outer'>
            <Navbar expand="lg" className="bg-body-tertiary p-0" id='navbar-inner'>
                <Container className="m-0 col-12 d-flex">
                    <Navbar.Brand className="col-4 d-flex justify-content-center brand-section">
                        <NavLink className="nav-link d-flex flex-row w-75 justify-content-evenly" to="/">
                            <img
                                alt=""
                                src={logo}
                                width={40}
                                height={40}
                                className="d-inline-block"
                            />
                            <h2 className='primary-text-color brand-name'>TEMSPEC</h2>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="w-100 m-100 justify-content-evenly align-items-center">
                            <NavLink className="primary-text-color nav-link menu"  to="/">HOME</NavLink>
                            <NavLink className="primary-text-color nav-link menu" to="/compare">COMPARISON</NavLink>
                            <NavLink className="primary-text-color nav-link menu" to="/timeline">TIMELINE</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

};

export default NavBar;