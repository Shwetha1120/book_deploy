const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Shwetha:shwe1120@mycluster.wa02z.mongodb.net/')
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(err));

app.use('/api/books', bookRoutes);
console.log('Book routes loaded: /api/books');

app.listen(5000, () => console.log('Server running on port 5000'));
