var mongoose = require('mongoose');

var TeamUser = mongoose.model('TeamDetails',{manager : {
    type : String,
    required : true,
    unique : true

},

teamname : {
    type : String
}});


module.exports = {
    TeamUser
}
