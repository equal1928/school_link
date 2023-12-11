import React from 'react';
import { Form } from 'react-bootstrap';

import './Footer.css'

export function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerRow">
                <div className="footerColumn">
                    <p className="footerTitle">Не пропустите интересные предложения!</p>
                </div>
                <div className="footerColumn">
                    <a href="">mail@gmail.com</a><br />
                    <a href="">8 (343) 000-00-00</a>
                </div>
                <div className="footerColumn">
                    <a href="">Контакты</a><br />
                    <a href="">О компании</a>
                </div>
            </div>
            <div className="footerRow">
                <div className="footerColumnSubscribe">
                    <p style={{marginBottom: "5px"}}>Подпишитесь на нашу рассылку, чтобы всегда оставаться на связи</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="formEmail" type="email" placeholder="Введите ваш e-mail" />
                            <p className="footerPolicyText">
                                Нажимая кнопку отправить, Вы автоматически принимайте условия 
                                политики обработки персональных данных.
                            </p>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <div>
                <hr className="horizontalLine" />
            </div>
            <div className="footerPolicy">
                <p className="footerPolicyText">Privacy Policy</p>
                <p className="footerPolicyText">© 2023</p>
            </div>
        </footer>
    );
}