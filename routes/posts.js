var
  express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

  var app = express();

app.get('/posts', function(req, res){
  Post.find({}, function(err, result){
    if(err) throw err;
    res.json(result);
  })
});

app.get('/posts/:id', function(req, res){
  Post.findById(req.params.id, function(err, post){
    if(err) return console.log(err)
    res.json(post)
  })
})

app.patch('/posts/:id', function(req, res){
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true} , function(err, post) {
    if (err) console.log(err)
    res.json({message: "Post updated!", success: true, post: post})
  })
})

app.delete('/posts/:id', function(req, res){
  Post.findByIdAndRemove(req.params.id, function(err, post) {
    if (err) console.log(err)
    res.json({message: "Post removed!", success: true, post: post})
  })
})

app.get('/createPost',function(req,res){
  console.log(req.query);
  var title="";
  var content ="";
  if(req.body.title){
    title = req.body.title;
  }
  if(req.body.content){
    content = req.body.content;
  }
])
