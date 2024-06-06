import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/api/appointments', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAppointments(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAppointments();
  }, []);

  const handleCreateAppointment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('http://localhost:5000/api/appointments', { date, description }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAppointments([...appointments, response.data]);
      setDate(new Date());
      setDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAppointment = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/api/appointments/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setAppointments(appointments.filter(appointment => appointment._id !== id));
  };

  return (
    <Container>
      <h2>Agendamento de Consultas</h2>
      <Form onSubmit={handleCreateAppointment}>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Data</Form.Label>
          <DatePicker
            selected={date}
            onChange={date => setDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="form-control"
          />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Agendar</Button>
      </Form>

      <h3 className="mt-4">Consultas Agendadas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment._id}>
              <td>{new Date(appointment.date).toLocaleString()}</td>
              <td>{appointment.description}</td>
              <td>
                <Button variant="danger" onClick={() => deleteAppointment(appointment._id)}>Excluir</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AppointmentPage;


