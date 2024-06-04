import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }
            try {
                const response = await axios.get('/api/users', {
                    headers: { Authorization: token }
                });
                setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login');
            }
        };
        fetchUsers();
    }, []);

    const deleteUser = async (id) => {
        const token = localStorage.getItem('token');
        await axios.delete(`/api/users/${id}`, {
            headers: { Authorization: token }
        });
        setUsers(users.filter(user => user._id !== id));
    };

    return (
        <Container>
            <h2>Administração de Usuários</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button variant="danger" onClick={() => deleteUser(user._id)}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default AdminPage;

