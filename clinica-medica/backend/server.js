const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
const routes = require('./routes');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',routes);

mongoose.connect('mongosh "mongodb+srv://cluster0.wmrj0rf.mongodb.net/" --apiVersion 1 --username naylahonorato',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('MongoDB connected'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));

