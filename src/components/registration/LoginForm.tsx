import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

import "./Registration.css"


export function LoginForm(props: any) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const resetForm = () => {
        setPhone('');
        setPassword('');
        setIsValidPhone(true);
        setIsValidPassword(true);
    };

    const validatePhone = () => {
        setIsValidPhone(phone.length > 0);
    };

    const validatePassword = () => {
        setIsValidPassword(password.length > 0);
    };

    const handleSubmit = () => {

    };

    return (
        <Modal 
            className="LoginForm"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => {
                resetForm();
                props.onHide();
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Войти в личный кабинет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="tel"
                            placeholder="Номер телефона"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={validatePhone}
                            style={{ borderColor: isValidPhone ? '' : 'red' }}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                            style={{ borderColor: isValidPassword ? '' : 'red' }}
                            required
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="FooterButton" onClick={handleSubmit}>Продолжить</button>
            </Modal.Footer>
        </Modal>
    );
}