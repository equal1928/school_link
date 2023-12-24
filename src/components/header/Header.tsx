import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegistrationForm } from '../registration/RegistrationForm'
import { LoginForm } from '../registration/LoginForm'

import './Header.css'
import logoWhite from '../images/logoWhite.png'
import logoBlack from '../images/logoBlack.png'
import favouritesIcon from '../images/favouritesNo.png'


export function Header({ isMainPage = false }: { isMainPage?: boolean }) {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registrationModalShow, setRegistrationModalShow] = useState(false);
    const navigate = useNavigate();
    function favouritesBtnClick(event: any) {
        navigate('/favorites');
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary headerContainer">
            <Container>
                <Navbar.Brand href="/">
                    <img src={isMainPage ? logoWhite : logoBlack} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle className="toggleButtonHeader" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="entryBlock" id="basic-navbar-nav">
                    <Nav className="navLinkHeader">
                        <button className="favouritesBtn" onClick={favouritesBtnClick}>
                            <Image className="favouritesImg" src={favouritesIcon} />
                        </button>
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