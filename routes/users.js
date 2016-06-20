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

module.exports = userRouter
