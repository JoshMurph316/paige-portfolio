var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true}
});

schema.plugin(mongooseUniqueValidator); //used to validate if emails are unique

module.exports = mongoose.model('Customer', schema);