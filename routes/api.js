var express = require('express');
var router = express.Router();
var restful = require('node-restful');

var user = require('../models/user');
var period = require('../models/period');
var jnvAssociation = require('../models/jnvAssociation');
var jnv = require('../models/jnv');
var education = require('../models/education');
var work = require('../models/work');
var address = require('../models/address');

user = restful.model('user', user);
period = restful.model('period', period);
jnvAssociation = restful.model('jnvAssociation', jnvAssociation);
jnv = restful.model('jnv', jnv);
education = restful.model('education', education);
work = restful.model('work', work);
address = restful.model('address', address);

// Routes
user.methods(['get', 'put', 'post', 'delete']);
user.register(router, '/user');

period.methods(['get', 'put', 'post', 'delete']);
period.register(router, '/period');

jnvAssociation.methods(['get', 'put', 'post', 'delete']);
jnvAssociation.register(router, '/jnvAssociation');

jnv.methods(['get', 'put', 'post', 'delete']);
jnv.register(router, '/jnv');

education.methods(['get', 'put', 'post', 'delete']);
education.register(router, '/education');

work.methods(['get', 'put', 'post', 'delete']);
work.register(router, '/work');

address.methods(['get', 'put', 'post', 'delete']);
address.register(router, '/address');

module.exports = router;
