var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    manager : {
        type : String,
        required : true,
        unique : true

    },

    teamname : {
        type : String
    }
});

var Team = mongoose.model('Teams',TeamSchema);

module.exports = {
    Team
}