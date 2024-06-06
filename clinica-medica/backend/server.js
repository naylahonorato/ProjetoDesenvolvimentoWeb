const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const cors = require('cors');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET;

console.log('JWT_SECRET:', jwtSecret);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://naylahonorato:DvXL1jW6coF7SF2B@clusterdb.3yz0lgy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterDB', { })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Rotas
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


