import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import axios from "axios";

import "./Registration.css"


export function RegistrationForm(props: any) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const resetForm = () => {
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setIsValidPhone(true);
        setIsValidPassword(true);
        setPasswordsMatch(true);
        setErrorMessage('');
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
        setErrorMessage(password !== confirmPassword ? 'Пароли не совпадают' : '')
    };

    const handleSubmit = async () => {
        if (!isValidPhone) {
            setErrorMessage('Введите номер телефона');
            return;
        }
        if (!isValidPassword || !confirmPassword.length) {
            setErrorMessage('Введите пароль');
            return;
        }
        if (!passwordsMatch) {
            setErrorMessage('Пароли не совпадают');
            return;
        }
    
        try {
            const response = await axios.post('/users', { user_login: phone, user_password: password });
        
            if (response.data.success) {
                setErrorMessage('Регистрация прошла успешно');
            } else {
                setErrorMessage('Ошибка регистрации');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Ошибка регистрации');
        }
    };

    const handlePhoneChange = (e: any) => {
        const inputValue = e.target.value.replace(/[^\d]/g, '');
        setPhone(inputValue);
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
                            onChange={handlePhoneChange}
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
                        <Form.Text style={{ color: 'red' }}>
                            {errorMessage}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="FooterButton" onClick={handleSubmit}>Зарегистрироваться</button>
            </Modal.Footer>
        </Modal>
    );
}