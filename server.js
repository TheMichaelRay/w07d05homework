var
  express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  bodyParser = require('body-parser'),
  PORT = 3000;




app.listen(PORT, function(err){
  if (err) throw err;
  console.log("Server running on port:", PORT)
})
