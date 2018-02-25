var restful = require('node-restful');
var mongoose = restful.mongoose;
var address = require('./address');
var period = require('./period');


var education = new mongoose.Schema({
    course : String,
    school : String,
    place : address,
    duration: period
});


module.exports = education;
//module.exports = restful.model('education',education);