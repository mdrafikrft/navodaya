var restful = require('node-restful');
var mongoose = restful.mongoose;
var address = require('./address');
var period = require('./period');


var education = new mongoose.Schema({
    course : { type: String, required: true},
    school : { type:String, required: true},
    place : { type: address, required: true},
    duration: { type: period,required: true}
});


module.exports = education;
//module.exports = restful.model('education',education);