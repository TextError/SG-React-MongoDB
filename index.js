const express = require('express');
const app = express();


//------------------------------------

//@route   Get localhost:5000
//desc     Test router
//@access  Public
app.get('/', (req,res) => {
  res.send({ hello: 'world !' });
});

//------------------------------------

//Port
const PORT  = process.env.PORT || 5000
app.listen(PORT);

//------------------------------------
