const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vetSchema = new Schema({
    name: { type: String },
    email: { type: String},
    telephone: { type: Number},
    speciality: { type: String},
    entry: { 
        type: Date,
        //Date.now retorna la fecha en un numero unix timestamp
        default: Date.now
    }
},
{
    collection: 'vets'
}
)

module.exports = mongoose.model('Vet', vetSchema);