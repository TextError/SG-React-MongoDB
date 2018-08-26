const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Users'); // const Users = require('./models/Users');
require('./services/passport'); // const authRoutes = require('./routes/authRoutes');

const app = express();

//------------------------------------

//Connect to MongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
    console.log(`Server is running on port: ${PORT} !`);
  })
  .catch(err => console.log(err));

//------------------------------------

require('./routes/authRoutes')(app);

//------------------------------------

//Port
const PORT  = process.env.PORT || 5000
app.listen(PORT);

//------------------------------------
 