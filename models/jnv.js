var restful = require('node-restful');
var mongoose = restful.mongoose;

var address = require('./address');
var period = require('./period');

var jnv = new mongoose.Schema({
    place : { type:address, required: true},
    duration: { type: period, required: true},
    associatedUsers :[mongoose.Schema.Types.ObjectId]
});

module.exports = jnv;
//module.exports = restful.model('jnv',jnv);