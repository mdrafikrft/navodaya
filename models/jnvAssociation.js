var restful = require('node-restful');
var mongoose = restful.mongoose;
var jnv = require('./jnv');
var period = require('./period')

var jnvAssociation = new mongoose.Schema({
    role : String,
    jnv : jnv,
    duration: period
});

module.exports = jnvAssociation;
//module.exports = restful.model('jnvAssociation',jnvAssociation);