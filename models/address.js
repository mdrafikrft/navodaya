var restful = require('node-restful');
var mongoose = restful.mongoose;

var address = new mongoose.Schema({
    street: String,
    town: String,
    city: String,
    state: String,
    country: String
});


module.exports = address;
//module.exports = restful.model('address',address);