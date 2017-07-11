const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const emailSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

emailSchema.plugin(mongooseUniqueValidator); //used to validate if emails are unique

const Email = module.exports = mongoose.model('Email', emailSchema);

module.exports.addEmail = function(newEmail, callback) {
    newEmail.save(callback);
};