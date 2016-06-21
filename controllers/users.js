var
  User = require('../models/User.js')

module.exports = {
    index: index,
    new: knew,
    create: create,
    update: update,
    destroy: destroy,
    show: show
  }

function index (req, res){
  User.find({}, function(err, user){
    if(err) throw err;
    res.render('users/index', {user: user });
  })
}

function knew (req, res){
    res.render('users/new');
  }

function create (req,res){
  User.create(req.body, function(err, user) {
    if (err) throw err;
    res.redirect('/users')
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
