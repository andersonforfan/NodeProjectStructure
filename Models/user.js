
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : String,
    password : String,
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    dateCreate : { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
