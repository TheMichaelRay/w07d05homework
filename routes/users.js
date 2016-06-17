var
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

  var app = express();

app.get('/users', function(req, res){
  User.find({}, function(err, result){
    if(err) throw err;
    res.json(result);
  })
});
