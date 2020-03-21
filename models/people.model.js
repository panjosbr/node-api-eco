const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let PeopleSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 60
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('People', PeopleSchema);
