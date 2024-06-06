const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment'); // Assumindo que você tem um modelo de agendamento definido
const jwt = require('jsonwebtoken');

// Middleware de autenticação
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = id;
        next();
    } catch {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

// Criar agendamento
router.post('/', authMiddleware, async (req, res) => {
    const { date, description } = req.body;
    const appointment = new Appointment({ date, description, user: req.userId });

    await appointment.save();
    res.status(201).send(appointment);
});

// Obter agendamentos
router.get('/', authMiddleware, async (req, res) => {
    const appointments = await Appointment.find({ user: req.userId });
    res.send(appointments);
});

module.exports = router;


