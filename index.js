const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();


//------------------------------------

passport.use(new GoogleStrategy(
    { 
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    accessToken => {
      console.log(accessToken);
    }
  ));

//------------------------------------

//@route   Get localhost:5000/auth/google
//desc     Test router
//@access  Private
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email '] })
);

//------------------------------------]

//@route   Get localhost:5000/auth/google
//desc     Test router
//@access  Private
app.get('/auth/google/callback', passport.authenticate('google'));

//------------------------------------

//Port
const PORT  = process.env.PORT || 5000
app.listen(PORT);

//------------------------------------
