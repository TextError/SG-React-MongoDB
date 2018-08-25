const mongoose = require('mongoose');
const Scheema = mongoose.Schema;


const UserScheema = new Scheema({
  googleId: {
    type: String
  }
});

// module.exports = Users = mongoose.model('users', userScheema);
mongoose.model('users', UserScheema);
