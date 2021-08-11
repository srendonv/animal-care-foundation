const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dateSchema= new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  fecha: {
    type: String
  },
  hora: {
    type: String
  },
  observaciones: {
    type: String
  }
}, {
    collection: 'dates'
  })

module.exports = mongoose.model('Dates', dateSchema)