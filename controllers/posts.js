var
  Post = require('../models/Post.js')


module.exports = {
  index: index,
  new: knew,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}


function index (req, res){
  Post.find({}, function(err, posts){
    if(err) throw err;
    res.render('posts/index', {posts: posts});
  })
}

function knew (req, res){
  res.render('posts/new')
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
    res.redirect('/posts')
  })
}
