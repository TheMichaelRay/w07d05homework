var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  userSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    created_at: Date,
    updated_at: Date
  })

userSchema.pre('save', function(next){
  var current_date = new Date
  this.updated_at = current_date
  if (!this.created_at) {
    this.created_at = current_date
  }
  next()
})

var User = mongoose.model('User', userSchema)
module.exports = User
