var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    images: [{type: Schema.Types.ObjectId, ref: 'Image'}]
});

module.exports = mongoose.model('User', schema);