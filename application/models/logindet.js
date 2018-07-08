var mongoose = require('mongoose');

var loginUser = mongoose.model('LoginDetails',{username: {type:String},password:{type:String}});


module.exports = {
    loginUser
}
