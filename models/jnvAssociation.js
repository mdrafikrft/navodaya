var restful = require('node-restful');
var mongoose = restful.mongoose;
var jnv = require('./jnv');
var period = require('./period');

var jnvAssociation = new mongoose.Schema({
    role : { type: String, required: true},
    jnv : { type: mongoose.Schema.Types.ObjectId, required: true},
    duration: { type: period, required: true}
});

module.exports = jnvAssociation;
//module.exports = restful.model('jnvAssociation',jnvAssociation);