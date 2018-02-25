var restful = require('node-restful');
var mongoose = restful.mongoose;
var address = require('./address');
var period = require('./period');

var work = new mongoose.Schema({
    position: String,
    industry: String,
    company : String,
    place : address,
    duration : period
});

module.exports = work;
//module.exports = restful.model('work',work);