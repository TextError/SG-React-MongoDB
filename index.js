const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


//------------------------------------

//@route   Get localhost:5000
//desc     Test router
//@access  Public


//------------------------------------

passport.use(new GoogleStrategy());

//------------------------------------

//Port
const PORT  = process.env.PORT || 5000
app.listen(PORT);

//------------------------------------
