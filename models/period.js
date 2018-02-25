var restful = require('node-restful');
var mongoose = restful.mongoose;

var period = new mongoose.Schema({
    from: Date,
    to: Date
});


module.exports = period;
//module.exports = restful.model('period',period);