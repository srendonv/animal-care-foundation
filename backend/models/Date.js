const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dateSchema= new Schema({

}, {
    collection: 'dates'
  })

module.exports = mongoose.model('Dates', dateSchema)