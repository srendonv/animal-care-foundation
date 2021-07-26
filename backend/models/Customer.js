const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema= new Schema({
  name: {
    type: String
  },
  last_name: {
      type: String
  },
  type_id: {
      type: String
  },
  number_id: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
}, {
    collection: 'customers'
  })

module.exports = mongoose.model('Customers', customerSchema)