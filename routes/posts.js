var
  express = require('express'),
  Post = require('../models/Post.js'),
  postRouter = express.Router();
  postCtrl = require('../controllers/posts.js')

postRouter.route('/')
  .get(postCtrl.index)
  .post(postCtrl.create)
postRouter.route('/:id')
  .get(postCtrl.show)
  .patch(postCtrl.update)
  .delete(postCtrl.destroy)


module.exports = postRouter
