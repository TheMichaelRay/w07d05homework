var
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  userSchema = new Schema({
    name: {type: String, required: true}
    age: 'number',
    email: 'string'
  })
