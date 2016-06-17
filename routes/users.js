var
  express = require('express'),
  app = express(),
  User = require('../models/User.js')


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

app.post('/users',function(req,res){
  User.create(req.body, function(err, user) {
    if (err) throw err;
    res.json(user)
  })
})
