import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Header.css'
import logoIcon from '../images/logoSite.png'
import favouritesIcon from '../images/favourites.png'
import { Image } from 'react-bootstrap';


export function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoIcon} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="entryBlock" id="basic-navbar-nav">
                    <Nav className="navLink">
                        <Image className="favouritesButton" src={favouritesIcon} />
                        <Button className="loginButton" variant="outline-secondary">Войти</Button>
                        <Button className="registrationButton" variant="outline-secondary">Зарегистрироваться</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}