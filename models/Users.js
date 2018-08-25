const mongoose = require('mongoose');
const { Scheema } = mongoose; //const Scheema = mongoose.Schema;


const userScheema = new Scheema({
  googleID: {
    type: String
  },
  name: {
    type: String,
    require: true
  }
});

mongose.model('users', userScheema );
//module.exports = userScheema = mongoose.model('users', UserScheema);