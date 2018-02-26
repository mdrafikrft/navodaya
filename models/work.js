var restful = require('node-restful');
var mongoose = restful.mongoose;
var address = require('./address');
var period = require('./period');

var work = new mongoose.Schema({
    position: { type: String, required: true},
    industry: { type: String, required: true},
    company : { type: String, required: true},
    place : { type: address, required: true},
    duration: { type: period,required: true}
});

module.exports = work;
//module.exports = restful.model('work',work);