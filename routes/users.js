var
  express = require('express'),
  app = express(),
  User = require('../models/User.js'),
  userRouter = express.Router();
  userCtrl = require('../controllers/users.js')


userRouter.route('/')
  .get(userCtrl.index)
  .post(userCtrl.create)
userRouter.route('/:id')
  .get(userCtrl.show)
  .patch(userCtrl.update)
  .delete(userCtrl.destroy)

module.exports = userRouter
