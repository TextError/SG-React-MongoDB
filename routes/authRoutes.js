const passport = require('passport');


module.exports = (app) => {

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

}