const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dateSchema= new Schema({
  datetime: {
    type: Date
  },
  customer_id: {
    type: String
  },
  pet_id: {
    type: String
  },
  vet_id: {
    type: String
  },
  description: {
    type: String
  }
}, {
    collection: 'dates'
  })

module.exports = mongoose.model('Dates', dateSchema)