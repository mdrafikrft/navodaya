var restful = require('node-restful');
var mongoose = restful.mongoose;

var address = new mongoose.Schema({
    street: { type: String, required: true},
    town: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    country: { type: String, required: true}
});


module.exports = address;
//module.exports = restful.model('address',address);