const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();


//------------------------------------

//@route   Get localhost:5000
//desc     Test router
//@access  Public


//------------------------------------

passport.use(new GoogleStrategy(
    { cliendID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'},
    (access) => {
      console.log(accessToken);
    }
  ));

//------------------------------------

//Port
const PORT  = process.env.PORT || 5000
app.listen(PORT);

//------------------------------------
