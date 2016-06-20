var
  express = require('express'),
  mongoose = require('mongoose'),
  app = express(),
  bodyParser = require('body-parser'),
  postRoutes = require('./routes/posts.js'),
  userRoutes = require('./routes/users.js'),
  ejsLayouts = require('express-ejs-layouts'),
  PORT = 3000

mongoose.connect('mongodb://localhost/scrumdb', function(err){
  if (err) throw err;
  console.log('connected to database!');
})

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(ejsLayouts)
app.use(express.static('./public'))
app.use('/posts', postRoutes)
app.use('/users', userRoutes)

app.get('/', function(req, res) {
  res.json({message: 'Welcome to the site!'})
})



app.listen(PORT, function(err){
  if (err) throw err;
  console.log("Server running on port:", PORT)
})
