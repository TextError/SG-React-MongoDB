const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/Users'); // const Users = require('./models/Users');
require('./services/passport'); // const authRoutes = require('./routes/authRoutes');

const app = express();

//------------------------------------

//Make use of cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,  //Cookie last for 30 days
    keys: [keys.cookieKey]  //Incrypted
  })
);

//------------------------------------

//Connect to MongoDB
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
    console.log(`Server is running on port: ${PORT}`);
  })
  .catch(err => console.log(err));

//------------------------------------

//Passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

//------------------------------------

require('./routes/authRoutes')(app);

// app.get('/', (req, res) => {
//   res.json({ tst: 'test'});
// })

//------------------------------------

//Port
const PORT  = process.env.PORT || 5000
app.listen(PORT);

//------------------------------------
 