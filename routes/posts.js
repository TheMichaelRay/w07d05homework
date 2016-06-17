var
  express = require('express'),
  app = express(),
  Post = require('../models/Post.js'),
  postRouter = express.Router();


postRouter.route('/')
  .get(index)
  .post(create)
postRouter.route('/:id')
  .get(show)
  .patch(update)
  .delete(destroy)




function index (req, res){
  Post.find({}, function(err, result){
    if(err) throw err;
    res.json(result);
  })
}


function show (req, res){
  Post.findById(req.params.id, function(err, post){
    if(err) return console.log(err)
    res.json(post)
  })
}


function update (req, res){
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true} , function(err, post) {
    if (err) console.log(err)
    res.json({message: "Post updated!", success: true, post: post})
  })
}


function destroy (req, res){
  Post.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) console.log(err)
    res.json({message: "Post removed!", success: true, post: post})
  })
}


function create (req,res){
  Post.create(req.body, function(err, post) {
    if (err) throw err;
    res.json(post)
  })
}

module.exports = postRouter
