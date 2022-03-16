const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = Schema({
  name: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  age: Number,
  address: {
    type: String
  },
});

module.exports = mongoose.model('users', userSchema);