var
  express = require('express'),
  app = express(),
  User = require('../models/User.js'),
  userRouter = express.Router();


userRouter.route('/')
  .get(index)
  .post(create)
userRouter.route('/:id')
  .get(show)
  .patch(update)
  .delete(destroy)


function index (req, res){
  User.find({}, function(err, result){
    if(err) throw err;
    res.json(result);
  })
}

function create (req,res){
  User.create(req.body, function(err, user) {
    if (err) throw err;
    res.json(user)
  })
}

function show (req, res){
  User.findById(req.params.id, function(err, user){
    if(err) return console.log(err)
    res.json(user)
  })
}


function update (req, res){
  User.findByIdAndUpdate(req.params.id, req.body, { new: true} , function(err, user) {
    if (err) console.log(err)
    res.json({message: "User updated!", success: true, user: user})
  })
}


function destroy (req, res){
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) console.log(err)
    res.json({message: "User removed!", success: true, user: user})
  })
}

module.exports = userRouter
