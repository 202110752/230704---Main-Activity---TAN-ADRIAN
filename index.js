// index.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Load routes and controllers
const courseRoutes = require('./routes/courseRoutes');
const courseControllers = require('./controllers/courseControllers');

mongoose.connect('mongodb+srv://admin:abcd1234@sandbox.xcwa6zf.mongodb.net/an22_sample_database?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define the /courses string to be included for all course routes defined in the 'courseRoutes' file
app.use('/courses', courseRoutes(courseControllers));

app.listen(4000, () => {
  console.log('Server Running on Localhost:4000');
});
