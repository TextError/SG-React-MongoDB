const passport = require('passport');


module.exports = (app) => {

  //@route   Get localhost:5000/auth/google
  //desc     Authenticate Google user
  //@access  Private
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email '] })
  );

  //------------------------------------

  //@route   Get localhost:5000/auth/google
  //desc     Authenticate Google user - Callback
  //@access  Private
  app.get(
    '/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  //------------------------------------

  //@route   Get localhost:5000/api/logout
  //desc     Logout user
  //@access  Private
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //------------------------------------

  //@route   Get localhost:5000/api/current_user
  //desc     Respone with current user
  //@access  Private
  app.get('/api/current_user', (req, res) =>{
    res.json(req.user);
  });

  //------------------------------------
}