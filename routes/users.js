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

app.get('/users/:id', function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err) return console.log(err)
    res.json(user)
  })
})

app.patch('/users/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, { new: true} , function(err, user) {
    if (err) console.log(err)
    res.json({message: "User updated!", success: true, user: user})
  })
})

app.delete('/users/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) console.log(err)
    res.json({message: "User removed!", success: true, user: user})
  })
})

app.get('/createUser',function(req,res){
  console.log(req.query);
  var name="";
  var age ="";
  var email ="";
  if(req.body.name){
    name = req.body.name;
  }
  if(req.body.age){
    age = req.body.age;
  }
  if(req.body.email){
    email = req.body.email;
  }
