import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

import "./Registration.css"


export function RegistrationForm(props: any) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const resetForm = () => {
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setIsValidPhone(true);
        setIsValidPassword(true);
        setPasswordsMatch(true);
    };

    const validatePhone = () => {
        setIsValidPhone(phone.length > 0);
    };

    const validatePassword = () => {
        setIsValidPassword(password.length > 0);
        if (confirmPassword.length > 0)
            validateConfirmPassword()
    };

    const validateConfirmPassword = () => {
        setPasswordsMatch(password === confirmPassword);
    };

    const handleSubmit = () => {

    };

    return (
        <Modal
            className="RegistrationForm"
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
                <Modal.Title>
                    Создать личный кабинет
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
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="password"
                            placeholder="Подтвердите пароль"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onBlur={validateConfirmPassword}
                            style={{ borderColor: passwordsMatch ? '' : 'red' }}
                            required
                        />
                        {!passwordsMatch && (
                            <Form.Text style={{ color: 'red' }}>
                                Пароли не совпадают
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="FooterButton" onClick={handleSubmit}>Зарегистрироваться</button>
            </Modal.Footer>
        </Modal>
    );
}