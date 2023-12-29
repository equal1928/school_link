import { useState } from "react";
import { Form, Modal } from "react-bootstrap";

import "./Registration.css"
import axios from "axios";


export function LoginForm(props: any) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const resetForm = () => {
        setPhone('');
        setPassword('');
        setIsValidPhone(true);
        setIsValidPassword(true);
        setErrorMessage('');
    };

    const validatePhone = () => {
        setIsValidPhone(phone.length > 0);
    };

    const validatePassword = () => {
        setIsValidPassword(password.length > 0);
    };

    const handleSubmit = async () => {
        if (!isValidPhone) {
            setErrorMessage('Введите номер телефона');
            return;
        }
        if (!isValidPassword) {
            setErrorMessage('Введите пароль');
            return;
        }

        // TODO: Удалить
        if (phone === '123' && password === '123')
        {
            localStorage.setItem('userPhone', phone);
            setErrorMessage('Вход выполнен успешно');
            resetForm();
            setTimeout(() => {
                props.onHide();
            }, 500);
            window.location.reload();
        }
        
        try {
            const response = await axios.get('/users', {
                params: {
                  phone,
                  password,
                },
            });
        
            if (response.data.success) {
                localStorage.setItem('userPhone', phone);
                setErrorMessage('Вход выполнен успешно');
                resetForm();
                setTimeout(() => {
                    props.onHide();
                }, 500);
                window.location.reload();
            } else {
                setErrorMessage('Ошибка входа');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Ошибка входа');
        }
    };

    const handlePhoneChange = (e: any) => {
        const inputValue = e.target.value.replace(/[^\d]/g, '');
        setPhone(inputValue);
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
                <Modal.Title>
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
                        <Form.Text style={{ color: 'red' }}>
                            {errorMessage}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className="FooterButton" onClick={handleSubmit}>Продолжить</button>
            </Modal.Footer>
        </Modal>
    );
}