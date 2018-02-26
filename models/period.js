var restful = require('node-restful');
var mongoose = restful.mongoose;

var period = new mongoose.Schema({
    from: { type:Date, required: true},
    to: { type:Date, required: true}
});


module.exports = period;
//module.exports = restful.model('period',period);