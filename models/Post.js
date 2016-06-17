var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  postSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    created_at: Date,
    updated_at: Date
  })

postSchema.pre('save', function(next){
  var current_date = new Date
  this.updated_at = current_date
  if (!this.created_at) {
    this.created_at = current_date
  }
  next()
})

var Post = mongoose.model('Post', postSchema)
module.exports = Post
