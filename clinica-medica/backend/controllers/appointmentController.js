const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
    const { date, description } = req.body;
    const userId = req.user.id;

    try {
        const appointment = new Appointment({ date, description, user: userId });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: 'Error creating appointment' });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id });
        res.json(appointments);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching appointments' });
    }
};

exports.deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        
        if (appointment.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Not authorized' });
        }

        await appointment.remove();
        res.json({ message: 'Appointment removed' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting appointment' });
    }
};




