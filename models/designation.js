const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designationSchema = Schema({
  title: {
    type: String,
    required: true
  },
  user: { type: Schema.Types.ObjectId, ref: 'users' }
});

//stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]

module.exports = mongoose.model('designation', designationSchema);