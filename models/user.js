var restful = require('node-restful');
var mongoose = restful.mongoose;

var address = require('./address');
var work = require('./work');
var education = require('./education');
var jnvAssociation = require('./jnvAssociation');

var user = new mongoose.Schema({
    firstName: { type: String,required: true},
    lastName:  { type: String,required: true},
    fatherName: { type: String,required: true},
    motherName: { type: String,required: true},
    dateOfBirth: { type: Date,required: true},
    primaryId : {type: String, required: true},
    addresses: { type:[address]},
    emails: { type:[String]},
    works : { type:[work]},
    educations: { type: [education]},
    jnvAssociations : { type:[jnvAssociation]}

});


// Return model
module.exports = user;
//module.exports = restful.model('user', user);
