const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cycleRoutes = require('./routes/cycleRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://trishabharti444:MYNAMEISRAMBHA@cluster0.lgrhl.mongodb.net/', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/auth', authRoutes);
app.use('/cycle', cycleRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
