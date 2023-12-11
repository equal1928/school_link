import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';

import { RegistrationForm } from '../registration/RegistrationForm'
import { LoginForm } from '../registration/LoginForm'

import './Header.css'
import logoIcon from '../images/logoSite.png'
import favouritesIcon from '../images/favourites.png'


export function Header() {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registrationModalShow, setRegistrationModalShow] = useState(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary headerContainer">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoIcon} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle className="toggleButtonHeader" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="entryBlock" id="basic-navbar-nav">
                    <Nav className="navLinkHeader">
                        <Image className="favouritesButton" src={favouritesIcon} />
                        <button className="loginButton" 
                                onClick={() => setLoginModalShow(true)}>
                            Войти
                        </button>
                        <button className="registrationButton" 
                                onClick={() => setRegistrationModalShow(true)}>
                            Зарегистрироваться
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <LoginForm
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
            />
            <RegistrationForm
                show={registrationModalShow}
                onHide={() => setRegistrationModalShow(false)}
            />
        </Navbar>
    )
}