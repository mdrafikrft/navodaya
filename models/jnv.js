var restful = require('node-restful');
var mongoose = restful.mongoose;

var address = require('./address');
var period = require('./period');

var jnv = new mongoose.Schema({
    place : address,
    duration : period
});

module.exports = jnv;
//module.exports = restful.model('jnv',jnv);