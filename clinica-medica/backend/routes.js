const express = require('express');
const router = express.Router();
const User = require('./User');
const Appointment = require('./Appointment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./authMiddleware');

// Create a new user
router.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const payload = { id: user._id, name: user.name, email: user.email, role: user.role };
        const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all users (protected route)
router.get('/users', authMiddleware, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a user (protected route)
router.put('/users/:id', authMiddleware, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a user (protected route)
router.delete('/users/:id', authMiddleware, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new appointment
router.post('/appointments', authMiddleware, async (req, res) => {
    const { date, description } = req.body;
    try {
        const appointment = new Appointment({ userId: req.user.id, date, description });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all appointments for a user
router.get('/appointments', authMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.user.id });
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update an appointment
router.put('/appointments/:id', authMiddleware, async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(appointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an appointment
router.delete('/appointments/:id', authMiddleware, async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

