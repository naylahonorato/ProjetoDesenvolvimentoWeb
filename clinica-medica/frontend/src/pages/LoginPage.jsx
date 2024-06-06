import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; // Página de destino após o login bem-sucedido
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor insira e-mail e senha.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setError('');
      
      navigate(from, { replace: true });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('E-mail ou senha inválidos. Por favor, tente novamente.');
      } else {
        setError('Ocorreu um erro. Por favor, tente novamente mais tarde.');
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;




